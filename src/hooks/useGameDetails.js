import { useState, useCallback } from 'react'
import axios from 'axios'

export const useGameDetails = () => {
  const [data, setData] = useState({})
  const [screenshots, setScreenshots] = useState([])
  const [error, setError] = useState('')

  const fetchData = useCallback(async ([dataUrl, screenshotsUrl]) => {
    const dataReq = axios.get(dataUrl)
    const screenshotsReq = axios.get(screenshotsUrl)

    await axios
      .all([dataReq, screenshotsReq])
      .then(
        axios.spread((dataRes, screenshotsRes) => {
          setData(dataRes.data)
          setScreenshots(screenshotsRes.data.results)
        })
      )
      .catch(() => setError('Something went wrong'))
  }, [])
  console.log(data)
  return { screenshots, data, error, fetchData }
}
