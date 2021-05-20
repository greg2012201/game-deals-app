import { useCallback, useReducer } from 'react'
import axios from 'axios'
const fetchingCancelMessage = 'cancel'
const actionTypes = {
  getData: 'GET_DATA',

  reset: 'RESET',
  lodaing: 'LOADING',
  error: 'ERROR',
}
const initialState = {
  data: [],
  nextPage: '',
  limit: 0,
  error: '',
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getData:
      return {
        ...state,
        data: [...state.data, ...action.data],
        nextPage: action.nextPage,
        limit: action.limit,
        loading: false,
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
    case actionTypes.reset:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
export const useGamesList = () => {
  const [gamesData, dispatch] = useReducer(reducer, initialState)

  const fetchData = useCallback(async (url, source = null) => {
    try {
      const {
        data: { results, next, count },
      } = await axios.get(
        url,
        source
          ? {
              cancelToken: source.token,
            }
          : null
      )

      return dispatch({
        type: actionTypes.getData,
        data: results,
        nextPage: next,
        limit: count,
      })
    } catch (e) {
      if (e.message === fetchingCancelMessage) return
      return dispatch({
        type: actionTypes.error,
      })
    }
  }, [])
  const resetData = useCallback((source) => {
    source.cancel(fetchingCancelMessage)

    dispatch({
      type: actionTypes.reset,
    })
  }, [])
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])

  return { gamesData, fetchData, resetData, getCancelToken }
}
