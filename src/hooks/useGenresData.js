import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { RAWGOptions } from 'utils/fetchingOptions'
import { useStateMachine } from './useStateMachine'
import { actions } from 'utils/state/transitions'

const GenresContext = React.createContext({
  data: [],
  fetchGenres: () => {},
})

const { url, key } = RAWGOptions

export const GenresDataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const { updateState, compareState } = useStateMachine()
  const fetchGenres = useCallback(async () => {
    updateState(actions.fetch)
    try {
      const {
        data: { results },
      } = await axios.get(`${url}/genres?key=${key}`)

      setData(results)
      updateState(actions.success)
    } catch (e) {
      setError('Something went wrong')
      updateState(actions.error)
    }
  }, [updateState])

  return <GenresContext.Provider value={{ data, error, fetchGenres, compareState }}>{children}</GenresContext.Provider>
}

export const useGenresData = () => {
  const genresContext = useContext(GenresContext)
  if (!genresContext) {
    throw Error('useGenres data needs to be used inside the GenresContext')
  }
  return genresContext
}
GenresDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
