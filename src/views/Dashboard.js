import React, { useContext } from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import Title from 'components/atoms/Title/Title'

const Dashboard = () => {
  const {
    data: {
      genresData: { data },
    },
    data: generalData,
  } = useContext(GamesContext)

  const { page, slug } = useParams()
  const { title } = useTitleByRoute(data, slug)

  return (
    <Wrapper>
      <Title isLoading={generalData.loading}>{slug ? title : page}</Title>

      {page === 'Home' ? <GamesList fecthingRoute={'/games?&'} /> : <GamesList fecthingRoute={`/games?genres=${slug}&`} />}

      <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
    </Wrapper>
  )
}

export default Dashboard
