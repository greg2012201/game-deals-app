import React from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import Title from 'components/atoms/Title/Title'
import { useGenres } from 'hooks/useGenres'
import { states } from 'utils/state/states'
import { Route } from 'react-router-dom'

const Dashboard = () => {
  const {
    data: { results: genres },
    compareState,
  } = useGenres()
  const { slug } = useParams()
  const { title } = useTitleByRoute(genres, slug)

  return (
    <Wrapper>
      <Title isLoading={compareState(states.isLoading)}>{slug ? title : 'Library'}</Title>
      <Route exact path="/library">
        <GamesList fecthingRoute={'/games?&'} />
      </Route>
      <Route exact path="/library/genres/:slug?">
        <GamesList fecthingRoute={`/games?genres=${slug}&`} />
      </Route>
      <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
    </Wrapper>
  )
}

export default Dashboard
