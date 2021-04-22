import React, { useReducer } from 'react'
import axios from 'axios'
import { RAWGOptions } from './../utils/fetchingOptions'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
  fetchPopularGames: () => {},
  displayGenreOnClick: () => {},
})
const actionTypes = { getPopularGames: 'GET_POPULAR_GAMES', getGamesByGenre: 'GET_GAMES_BY_GENRE' }
const initialState = { gamesData: [], error: '', loading: '', target: '' }
const { url, key } = RAWGOptions

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getPopularGames:
      return {
        ...state,
        gamesData: action.data,
      }
    case actionTypes.getGamesByGenre:
      return {
        ...state,
        gamesData: action.data,
        target: action.target,
      }
    default:
      return state
  }
}
const GamesDataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState)
  const fetchPopularGames = () => {
    axios.get(`${url}/games?key=${key}`).then((response) =>
      dispatch({
        type: actionTypes.getPopularGames,
        data: response.data.results,
      })
    )
  }

  const displayGenreOnClick = (e, id) => {
    axios.get(`${url}/games?genres=${id}&page=3&page_size=60&key=${key}`).then((response) =>
      dispatch({
        type: actionTypes.getGamesByGenre,
        data: response.data.results,
        target: e.target,
      })
    )
  }
  return <GamesContext.Provider value={{ data, fetchPopularGames, displayGenreOnClick }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
