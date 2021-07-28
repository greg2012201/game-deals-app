import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { RAWGOptions } from 'utils/fetchingOptions'
import { useParams } from 'react-router-dom'
import { useFetchData } from './useFetchData'

const GameDetailsContext = React.createContext(null)
const { url, key } = RAWGOptions
const initialState = []
export const GameDetailsProvider = ({ children }) => {
  const [data, setData] = useState(initialState)
  const { slug } = useParams()

  const { error, compareState, fetchData, getCancelToken, resetData } = useFetchData(setData)

  useEffect(() => {
    const cancelToken = getCancelToken()
    fetchData({ url: `${url}/games/${slug}?key=${key}`, source: cancelToken, setData })
    return () => {
      resetData(cancelToken, initialState)
    }
  }, [fetchData, slug, resetData, getCancelToken])
  return <GameDetailsContext.Provider value={{ data, error, compareState }}>{children}</GameDetailsContext.Provider>
}
export const useGameDetails = () => {
  const gameDetailsContext = useContext(GameDetailsContext)
  if (!gameDetailsContext) {
    throw Error('useGameDetails needs to be used inside the GameDetailsContext')
  }
  return gameDetailsContext
}
GameDetailsProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
