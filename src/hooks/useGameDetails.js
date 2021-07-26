import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { RAWGOptions } from 'utils/fetchingOptions'
import { useParams } from 'react-router-dom'
import { useGameDetailsData } from './useGameDetailsData'

const GameDetailsContext = React.createContext(null)
const { url, key } = RAWGOptions

export const GameDetailsProvider = ({ children }) => {
  const { slug } = useParams()
  const { data, error, compareState, fetchData, getCancelToken, resetData } = useGameDetailsData()
  useEffect(() => {
    const cancelToken = getCancelToken()

    window.scrollTo(0, 0)
    fetchData({ url: `${url}/games/${slug}?key=${key}`, source: cancelToken })
    return () => {
      resetData(cancelToken)
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
