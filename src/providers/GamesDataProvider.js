import React from 'react'
import { useGamesList } from '../hooks/useGamesList'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
})

const GamesDataProvider = ({ children }) => {
  const gamesData = useGamesList()

  return <GamesContext.Provider value={{ gamesData }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
