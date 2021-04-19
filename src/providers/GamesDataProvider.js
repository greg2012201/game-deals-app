import React from 'react'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
})

const GamesDataProvider = ({ children }) => {
  return <GamesContext.Provider value={{}}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
