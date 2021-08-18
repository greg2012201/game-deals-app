import { useCallback, useReducer } from 'react'
import axios from 'axios'
import { actions } from 'utils/state/transitions'
import { useStateMachine } from './useStateMachine'

const fetchingCancelMessage = 'cancel'
const actionTypes = {
  getData: 'GET_DATA',
  setInitialFetch: 'SET_INITAL_FETCH',
  reset: 'RESET',
  lodaing: 'LOADING',
  error: 'ERROR',
}
const initialState = {
  data: [],
  nextPage: '',
  limit: 0,
  error: '',
  hasInitialFetch: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setInitialFetch:
      return {
        ...state,
        hasInitialFetch: action.initial,
      }
    case actionTypes.getData:
      return {
        ...state,
        data: [...state.data, ...action.data],
        nextPage: action.nextPage,
        limit: action.limit,
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
  const [results, dispatch] = useReducer(reducer, initialState)
  const { updateState, compareState } = useStateMachine()
  const fetchData = useCallback(
    async ({ url, source = null, initial = true }) => {
      dispatch({ type: actionTypes.setInitialFetch, initial })
      updateState(actions.initialize)
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

        dispatch({
          type: actionTypes.getData,
          data: results,
          nextPage: next,
          limit: count,
        })
        updateState(actions.success)
      } catch (e) {
        if (e.message === fetchingCancelMessage) return
        dispatch({
          type: actionTypes.error,
        })
        updateState(actions.error)
      }
    },
    [updateState]
  )
  const resetData = useCallback((source) => {
    source.cancel(fetchingCancelMessage)
    dispatch({
      type: actionTypes.reset,
    })
  }, [])
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])

  return { results, fetchData, resetData, getCancelToken, compareState }
}
