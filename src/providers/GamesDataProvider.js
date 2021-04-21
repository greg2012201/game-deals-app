import React, { useReducer } from 'react'
import { useGamesList } from '../hooks/useGamesList'
import axios from 'axios'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
  fetchPopularGames: () => {},
  displayGenreOnClick: () => {},
})
const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_RAWG_API_URL}/games`,
}

const reducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'POPULAR_GAMES':
      return {
        ...state,
        gamesData: action.data,
      }
    case 'GET_GAMES_BY_GENRE':
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
  const [data, dispatch] = useReducer(reducer, { gamesData: [], target: '' })
  const fetchPopularGames = () => {
    const fetchData = () => {
      axios.get(`${options.url}?key=${process.env.REACT_APP_RAWG_API_KEY}`).then((response) =>
        dispatch({
          type: 'POPULAR_GAMES',
          data: response.data.results,
        })
      )
    }
    fetchData()
  }

  const displayGenreOnClick = (e, id) => {
    console.log(id)
    axios.get(`${options.url}?genres=${id}&page=3&page_size=60&key=${process.env.REACT_APP_RAWG_API_KEY}`).then((response) =>
      dispatch({
        type: 'GET_GAMES_BY_GENRE',
        data: response.data.results,
      })
    )
  }
  console.log(data)
  return <GamesContext.Provider value={{ data, fetchPopularGames, displayGenreOnClick }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
