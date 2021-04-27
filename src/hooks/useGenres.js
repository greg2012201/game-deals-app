import { useEffect, useState } from 'react'
import { RAWGOptions } from './../utils/fetchingOptions'
import axios from 'axios'
const { key, url } = RAWGOptions
export const useGenres = () => {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    axios
      .get(`${url}/genres?key=${key}`)
      .then(({ data: { results } }) => {
        setGenres(results)
      })
      .catch((err) => console.log(err))
  }, [])
  return genres
}
