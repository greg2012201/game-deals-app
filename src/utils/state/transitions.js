import { states } from './states'
export const actions = {
  initialize: 'INITIALIZE',
  success: 'FETCH_DATA_SUCCESS',
  error: 'FETCH_DATA_ERROR',
}
export const transitions = {
  [states.idle]: {
    [actions.initialize]: states.isLoading,
  },
  [states.isLoading]: {
    [actions.success]: states.hasLoaded,
    [actions.error]: states.hasError,
  },
  [states.hasLoaded]: {
    [actions.initialize]: states.isLoading,
  },
  [states.hasError]: {
    [actions.initialize]: states.isLoading,
  },
}
