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
        let response = await axios(`${options.url}?key=${process.env.REACT_APP_RAWG_API_KEY}`)

        setGamesData(response.data.results)
      } catch (error) {
        return console.log(error)
      }
    }
    fetchData()
  }, [])

  return gamesData
}
