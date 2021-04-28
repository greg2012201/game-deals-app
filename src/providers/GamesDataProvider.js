import React, { useReducer } from 'react'
import axios from 'axios'
import { RAWGOptions } from 'utils/fetchingOptions'

export const GamesContext = React.createContext({
  data: { genresData: { data: [{}] }, gamesData: { data: [], loading: '', error: '' } },
  genres: [{}],
  errors: Boolean,
  fetchPopularGames: () => {},
  fetchGamesByGenre: () => {},
  fetchGenres: () => {},
})

const actionTypes = {
  games: { getPopularGames: 'GET_POPULAR_GAMES', getGamesByGenre: 'GET_GAMES_BY_GENRE', lodaing: 'LOADING', error: 'ERROR' },
  genre: {
    getGenre: 'GET_GENRE',
  },
}
const initialState = {
  gamesData: {
    data: [],
    error: '',
    loading: true,
  },
  genresData: {
    data: [],
  },
}
const { url, key } = RAWGOptions

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.genre.getGenre:
      return {
        ...state,
        genresData: { data: action.data },
      }
    case actionTypes.games.getPopularGames:
      return {
        ...state,
        gamesData: { data: action.data, loading: false },
      }
    case actionTypes.games.getGamesByGenre:
      return {
        ...state,

        gamesData: { data: action.data, loading: false },
      }

    case actionTypes.games.loading:
      return {
        ...state,
        gamesData: { loading: true },
      }
    case actionTypes.games.error:
      return {
        ...state,
        gamesData: { data: [], loading: false, error: `Something went wrong. We couldn't load your content, Sorry !` },
      }
    default:
      return state
  }
}
const GamesDataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const fetchGenres = () => {
    axios
      .get(`${url}/genres?key=${key}`)
      .then(({ data: { results } }) => {
        dispatch({
          type: actionTypes.genre.getGenre,
          data: results,
        })
      })
      .catch((err) => console.log(err))
  }

  const fetchPopularGames = () => {
    axios
      .get(`${url}/games?key=${key}`)
      .then((response) => {
        dispatch({
          type: actionTypes.games.getPopularGames,
          data: response.data.results,
        })
      })
      .catch(() => {
        dispatch({
          type: actionTypes.games.error,
        })
      })
  }

  const fetchGamesByGenre = (id) => {
    dispatch({ type: actionTypes.loading })
    axios
      .get(`${url}/games?genres=${id}&page=3&page_size=60&key=${key}`)
      .then((response) => {
        dispatch({
          type: actionTypes.games.getGamesByGenre,
          data: response.data.results,
        })
      })
      .catch(() => {
        dispatch({
          type: actionTypes.games.error,
          loading: false,
        })
      })
  }

  return <GamesContext.Provider value={{ data, fetchPopularGames, fetchGamesByGenre, fetchGenres }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
