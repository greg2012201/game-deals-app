import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Background, Mask, Wrapper } from './GameDetails.style'
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
import { useGameDetails } from 'hooks/useGameDetails'
import ArticleContainerSkeletonLoader from 'components/oraganisms/ArticleContainer/ArticleContainerSkeletonLoader'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'

const GameDetails = () => {
  const theme = useTheme()
  const { slug } = useParams()

  const {
    data: { name, id, description_raw: descripton, background_image: backgroundImage, achievements_count: achievementsCount },
    compareState,
  } = useGameDetails()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  return (
    <Background>
      {compareState(states.hasError) ? (
        <ErrorPage>Something Went Wrong</ErrorPage>
      ) : (
        <Wrapper hasLoaded={compareState(states.hasLoaded) || compareState(states.empty)} backgroundURL={backgroundImage}>
          <Mask isLoading={compareState(states.isLoading) || compareState(states.empty)}>
            <Title isLoading={compareState(states.isLoading)} key={id}>
              {name}
            </Title>
            <Screenshots />
            {compareState(states.isLoading) || compareState(states.empty) ? (
              <ArticleContainerSkeletonLoader />
            ) : (
              <ArticleContainer title={'About'}>{descripton}</ArticleContainer>
            )}
            <InformationsTemplate>
              {compareState(states.isLoading) || compareState(states.empty) ? (
                <Loader className="loader" type="Oval" color={theme.colors.darkWhite} height={60} width={60} />
              ) : (
                <>
                  {achievementsCount > 0 && <AchievementsList />}
                  <GameMetaWrapper />
                  <PCRequirements />
                </>
              )}
            </InformationsTemplate>
            <GamesList title="Games like" endMessage={false} fecthingRoute={`/games/${slug}/game-series?`} />
          </Mask>
          <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
        </Wrapper>
      )}
    </Background>
  )
}

export default GameDetails
