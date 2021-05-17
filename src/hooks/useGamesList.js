import { useCallback, useReducer } from 'react'
import axios from 'axios'
const actionTypes = {
  getData: 'GET_DATA',
  getMoreData: 'GET_MORE_DATA',
  lodaing: 'LOADING',
  error: 'ERROR',
}
const initialState = {
  data: [],
  pagination: '',
  error: '',
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getData:
      return {
        ...state,
        data: action.data,
        pagination: action.pagination,
        loading: false,
      }
    case actionTypes.getMoreData:
      return {
        ...state,
        data: [...state.data, ...action.data],
        pagination: action.pagination,
      }

    case actionTypes.loading:
      return {
        ...state,
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

  const fetchData = useCallback(async (url) => {
    dispatch({ type: actionTypes.loading })

    try {
      const {
        data: { results, next },
      } = await axios.get(url)

      return dispatch({
        type: actionTypes.getData,
        data: results,
        pagination: next,
      })
    } catch (e) {
      return dispatch({
        type: actionTypes.error,
      })
    }
  }, [])
  const fetchMoreData = useCallback(async (url) => {
    try {
      const {
        data: { results, next },
      } = await axios.get(url)

      return dispatch({
        type: actionTypes.getMoreData,
        data: results,
        pagination: next,
      })
    } catch (e) {
      return dispatch({
        type: actionTypes.error,
      })
    }
  }, [])

  return { gamesData, fetchData, fetchMoreData }
}
