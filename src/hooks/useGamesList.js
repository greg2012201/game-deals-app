import { useCallback, useReducer } from 'react'
import { RAWGOptions } from 'utils/fetchingOptions'
import axios from 'axios'
const actionTypes = {
  getPopularGames: 'GET_POPULAR_GAMES',
  getGamesByGenre: 'GET_GAMES_BY_GENRE',
  lodaing: 'LOADING',
  error: 'ERROR',
}
const initialState = {
  data: [],
  error: '',
  loading: true,
}
const { url, key } = RAWGOptions

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getPopularGames:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case actionTypes.getGamesByGenre:
      return {
        ...state,

        data: action.data,
        loading: false,
      }

    case actionTypes.loading:
      return {
        ...initialState,
        loading: true,
      }
    case actionTypes.error:
      return {
        ...initialState,

        error: `Something went wrong. We couldn't load your content, Sorry !`,
      }
    default:
      return state
  }
}
export const useGamesList = () => {
  const [gamesData, dispatch] = useReducer(reducer, initialState)

  const fetchPopularGames = useCallback(async () => {
    dispatch({ type: actionTypes.loading })
    try {
      const {
        data: { results },
      } = await axios.get(`${url}/games?key=${key}`)
      return dispatch({
        type: actionTypes.getPopularGames,
        data: results,
      })
    } catch (e) {
      return dispatch({
        type: actionTypes.error,
      })
    }
  }, [])
  const fetchGamesByGenre = useCallback(async (id) => {
    dispatch({ type: actionTypes.loading })

    try {
      const {
        data: { results },
      } = await axios.get(`${url}/games?genres=${id}&page=3&page_size=60&key=${key}`)
      return dispatch({
        type: actionTypes.getGamesByGenre,
        data: results,
      })
    } catch (e) {
      return dispatch({
        type: actionTypes.error,
      })
    }
  }, [])

  return { gamesData, fetchGamesByGenre, fetchPopularGames }
}
