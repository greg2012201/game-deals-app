import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Background, Mask, Wrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Title from 'components/atoms/Title/Title'
import ArticleContainer from 'components/oraganisms/ArticleContainer/ArticleContainer'
import GameMetaWrapper from 'components/molecules/GameMetaWrapper/GameMetaWrapper'
import PCRequirements from 'components/molecules/PCRequirements/PCRequirements'
import InformationsTemplate from 'components/templates/InformationsTemplate/InformationsTemplate'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import AchievementsList from 'components/oraganisms/AchievementsList/AchievementsList'
import Screenshots from 'components/oraganisms/Screenshots/Screenshots'
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage'
import { states } from 'utils/state/states'
import { useStateMachine } from 'hooks/useStateMachine'

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const { compareState, updateState } = useStateMachine()
  const {
    data: detailsData,
    data: {
      name,
      id,
      description_raw: descripton,
      background_image: backgroundImage,
      achievements_count: achievementsCount,
      game_series_count: gamesLikeCount,
    },

    error,

    fetchData,
    getCancelToken,
    resetData,
  } = useGameDetails()
  useEffect(() => {
    const cancelToken = getCancelToken()
    window.scrollTo(0, 0)
    fetchData({ url: `${url}/games/${slug}?key=${key}`, updateState, source: cancelToken })
    return () => resetData(cancelToken)
  }, [fetchData, slug, updateState, resetData, getCancelToken])
  return (
    <Background>
      {compareState(states.hasError) ? (
        <ErrorPage>Something Went Wrong</ErrorPage>
      ) : (
        <Wrapper style={compareState(states.hasLoaded) ? { backgroundImage: `url(${backgroundImage})` } : { backgroundImage: 'none' }}>
          <Mask isLoading={compareState(states.isLoading)}>
            <Title isLoading={compareState(states.isLoading)} key={id}>
              {name}
            </Title>
            <Screenshots compareState={compareState} slug={slug} />
            <ArticleContainer compareState={compareState} title={'About'} error={error}>
              {descripton}
            </ArticleContainer>
            <InformationsTemplate compareState={compareState}>
              {achievementsCount > 0 ? <AchievementsList achievementsFor={slug} /> : null}
              <GameMetaWrapper data={detailsData} />
              <PCRequirements data={detailsData} />
            </InformationsTemplate>
            {gamesLikeCount && <GamesList title="Games like" endMessage={false} fecthingRoute={`/games/${slug}/game-series?`} />}
          </Mask>
          <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
        </Wrapper>
      )}
    </Background>
  )
}

export default GameDetails
