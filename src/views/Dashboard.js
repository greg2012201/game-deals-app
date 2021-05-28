import React, { useContext } from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { useVisibilityOnScroll } from 'hooks/useVisibilityOnScroll'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
const Dashboard = () => {
  const {
    data: {
      genresData: { data },
    },
  } = useContext(GamesContext)
  const isVisible = useVisibilityOnScroll()
  const { page, slug } = useParams()
  const { title } = useTitleByRoute(data, slug)
  return (
    <Wrapper>
      <h3>{slug ? title : page}</h3>
      <GamesList />
      <RoundButton onClick={customSmoothScrollTo} isVisible={isVisible} isReturn={true} />
    </Wrapper>
  )
}

export default Dashboard
