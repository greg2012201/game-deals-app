import React, { useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { RAWGOptions } from 'utils/fetchingOptions'

export const GamesContext = React.createContext({
  data: { genresData: { data: [{}] } },
  fetchGenres: () => {},
})

const actionTypes = {
  getGenre: 'GET_GENRE',
  loading: 'LOADING',
}
const initialState = {
  genresData: {
    data: [],
    loading: true,
  },
}
const { url, key } = RAWGOptions

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getGenre:
      return {
        ...state,
        genresData: { data: action.data },
        loading: false,
      }
    case actionTypes.loading:
      return {
        ...state,

        loading: true,
      }

    default:
      return state
  }
}
const GamesDataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const fetchGenres = useCallback(async () => {
    dispatch({ type: actionTypes.loading })
    try {
      const {
        data: { results },
      } = await axios.get(`${url}/genres?key=${key}`)

      dispatch({
        type: actionTypes.getGenre,
        data: results,
      })
    } catch (e) {
      throw Error(e)
    }
  }, [])

  return <GamesContext.Provider value={{ data, fetchGenres }}>{children}</GamesContext.Provider>
}
GamesDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
export default GamesDataProvider
