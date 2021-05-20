import React, { useContext } from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
const Dashboard = () => {
  const {
    data: {
      genresData: { data },
    },
  } = useContext(GamesContext)
  const { page, slug } = useParams()
  const { title } = useTitleByRoute(data, slug)
  return (
    <Wrapper>
      <h3>{slug ? title : page}</h3>
      <GamesList />
    </Wrapper>
  )
}

export default Dashboard
