import React, { useReducer } from 'react'
import { useGamesList } from '../hooks/useGamesList'
import axios from 'axios'
export const GamesContext = React.createContext({
  gamesData: [{}],
  errors: Boolean,
  fetchPopularGames: () => {},
})
const options = {
  method: 'GET',
  url: `${process.env.REACT_APP_RAWG_API_URL}/games`,
}
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'POPULAR_GAMES':
      return {
        ...state,
        gamesData: action.data,
      }
    default:
      return state
  }
}
const GamesDataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, { gamesData: '' })
  const fetchPopularGames = () => {
    const fetchData = async () => {
      try {
        let response = await axios(`${options.url}?key=${process.env.REACT_APP_RAWG_API_KEY}`)
        console.log(response.data.results)
        await dispatch({
          type: 'POPULAR_GAMES',
          data: response.data.results,
        })
      } catch (error) {
        return console.log(error)
      }
    }
    fetchData()
    console.log(data)
  }

  return <GamesContext.Provider value={{ data, fetchPopularGames }}>{children}</GamesContext.Provider>
}

export default GamesDataProvider
