import React from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import Title from 'components/atoms/Title/Title'
import { useGenresData } from 'hooks/useGenresData'
import { states } from 'utils/state/states'

const Dashboard = () => {
  const { data, compareState } = useGenresData()
  const { page, slug } = useParams()
  const { title } = useTitleByRoute(data, slug)

  return (
    <Wrapper>
      <Title isLoading={compareState(states.isLoading)}>{slug ? title : page}</Title>

      {page === 'Home' ? <GamesList fecthingRoute={'/games?&'} /> : <GamesList fecthingRoute={`/games?genres=${slug}&`} />}

      <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
    </Wrapper>
  )
}

export default Dashboard
