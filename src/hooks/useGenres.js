import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetchData } from './useFetchData'
import { RAWGOptions } from 'utils/fetchingOptions'

const GenresContext = React.createContext(null)
const { url, key } = RAWGOptions
export const GenresDataProvider = ({ children }) => {
  const [data, setData] = useState({})
  const { compareState, fetchData, error } = useFetchData(setData)
  const getGenresData = useCallback(() => {
    if (Object.keys(data).length !== 0) return
    fetchData({ url: `${url}/genres?key=${key}` })
  }, [fetchData, data])

  return <GenresContext.Provider value={{ data, error, compareState, getGenresData }}>{children}</GenresContext.Provider>
}

export const useGenres = () => {
  const genresContext = useContext(GenresContext)
  if (!genresContext) {
    throw Error('useGenres data needs to be used inside the GenresContext')
  }
  return genresContext
}
GenresDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
