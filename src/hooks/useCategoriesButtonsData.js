import { useEffect, useState } from 'react'
import axios from 'axios'
const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_RAWG_API_URL}/genres`,
}
export const useCategoriesButtonsData = () => {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios(`${options.url}?key=${process.env.REACT_APP_RAWG_API_KEY}`)
        console.log(res)
        return setGenres(res.data.results)
      } catch (err) {
        return console.log(err)
      }
    }

    fetchData()
  }, [])
  return genres
}
