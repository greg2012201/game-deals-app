import { useState, useEffect } from 'react'
import axios from 'axios'
const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_RAWG_API_URL}/games`,
}
export const useGamesList = () => {
  const [gamesData, setGamesData] = useState([])
  const [errors, setErrors] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${options.url}?key=${process.env.REACT_APP_RAWG_API_KEY}`)

        return response.data.results.map((el) => {
          return axios(`${options.url}/${el.id}?key=${process.env.REACT_APP_RAWG_API_KEY}`).then((response) => {
            const newGamesData = {
              id: response.data.id,
              title: response.data.name,
              image: response.data.background_image,
              description: response.data.description_raw,
              shop: response.data.stores[Math.round(Math.random() * (response.data.stores.length - 1))].url,
              price: '',
              genres: el.genres[0].name,
            }
            setGamesData((state) => [...state, newGamesData])
          })
        })
      } catch (error) {
        return console.log(error)
      }
    }

    fetchData()
  }, [])

  return gamesData
}
