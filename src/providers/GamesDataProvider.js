import React, { useState, useEffect } from 'react'
import axios from 'axios'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
})
const initialState = { id: '', title: '', image: '', description: '', shop: '', price: '' }
const GamesDataProvider = ({ children }) => {
  const [gamesData, setGamesData] = useState([])
  const [errors, setErrors] = useState('')

  useEffect(() => {
    const fetchData = async (endpoint) => {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_RAWG_API_URL}/${endpoint}`,
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_RAWG_API_KEY}`,
        },
      }

      try {
        let response = await axios(options)

        return response.data.results.map((el) => {
          // to poniżej w mapie może być wrappowane też z fetch data  spokojnie, przemyśleć także parametry tutaj aby były podawane
          return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_RAWG_API_URL}/${endpoint}/${el.id}`,
            headers: {
              'x-rapidapi-key': `${process.env.REACT_APP_RAWG_API_KEY}`,
            },
          }).then((response) => {
            const newGamesData = {
              id: response.data.id,
              title: response.data.name,
              image: response.data.background_image,
              description: response.data.description_raw,
              shop: response.data.stores[Math.round(Math.random() * (response.data.stores.length - 1))].url,
              price: '',
            }
            setGamesData((state) => [...state, newGamesData])
          })
        })
      } catch (error) {
        return console.log(error)
      }
    }

    fetchData('games')
  }, [])
  return <GamesContext.Provider value={{ gamesData, errors }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
