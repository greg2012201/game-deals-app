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

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const {
    data: detailsData,
    data: { name, id, description_raw: descripton, background_image: backgroundImage, achievements_count: achievementsCount },
    error,
    loading,
    fetchData,
  } = useGameDetails()
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData(`${url}/games/${slug}?key=${key}`)
  }, [fetchData, slug])

  return (
    <Background>
      {error ? (
        <ErrorPage>Something Went Wrong</ErrorPage>
      ) : (
        <Wrapper style={!loading ? { backgroundImage: `url(${backgroundImage})` } : { backgroundImage: 'none' }}>
          <Mask isLoading={loading}>
            <Title isLoading={loading} key={id}>
              {name}
            </Title>
            <Screenshots isLoading={loading} slug={slug} />
            <ArticleContainer data={detailsData} isLoading={loading} title={'About'} error={error}>
              {descripton}
            </ArticleContainer>
            <InformationsTemplate isLoading={loading}>
              {achievementsCount > 0 ? <AchievementsList achievementsFor={slug} /> : null}
              <GameMetaWrapper data={detailsData} />
              <PCRequirements data={detailsData} />
            </InformationsTemplate>
            <GamesList title="Games like" like endMessage={false} fecthingRoute={`/games/${slug}/game-series?`} />
          </Mask>
          <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
        </Wrapper>
      )}
    </Background>
  )
}

export default GameDetails
