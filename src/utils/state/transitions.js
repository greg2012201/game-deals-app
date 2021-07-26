import { states } from './states'
export const actions = {
  fetch: 'FETCH_DATA',
  success: 'FETCH_DATA_SUCCESS',
  error: 'FETCH_DATA_ERROR',
}
export const transitions = {
  [states.empty]: {
    [actions.fetch]: states.isLoading,
  },
  [states.isLoading]: {
    [actions.success]: states.hasLoaded,
    [actions.error]: states.hasError,
  },
  [states.hasLoaded]: {
    [actions.fetch]: states.isLoading,
  },
  [states.hasError]: {
    [actions.fetch]: states.isLoading,
  },
}
