import { useState, useCallback } from 'react'
import axios from 'axios'

export const useGameDetails = () => {
  const [data, setData] = useState({})
  const [screenshots, setScreenshots] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true )
 

  const fetchData = useCallback(async ([dataUrl, screenshotsUrl]) => {
    const dataReq = axios.get(dataUrl)
    const screenshotsReq = axios.get(screenshotsUrl)
setLoading(true)
    await axios
      .all([dataReq, screenshotsReq])
      .then(
       
        axios.spread((dataRes, screenshotsRes) => {
          setLoading(false)
          setData(dataRes.data)
          setScreenshots(screenshotsRes.data.results)
        })
      )
      .catch(() => { 
        setLoading(false)
        return setError('Something went wrong')})
  }, [])

  return { screenshots, data, error, fetchData, loading }
}
