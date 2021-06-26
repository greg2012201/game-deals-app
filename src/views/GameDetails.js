import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Background, Mask, Wrapper, ListWrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Title from 'components/atoms/Title/Title'
import ArticleTemplate from 'components/templates/ArticleTemplate/ArticleTemplate'
import GameMetaWrapper from 'components/molecules/GameMetaWrapper/GameMetaWrapper'
import PCRequirements from 'components/molecules/PCRequirements/PCRequirements'
import { InformationsTemplate } from 'components/templates/InformationsTemplate/InformationsTemplate'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useGamesList } from 'hooks/useGamesList'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import AchievementsList from 'components/oraganisms/AchievementsList/AchievementsList'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import Screenshots from 'components/oraganisms/Screenshots/Screenshots'

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const { fetchedData: fetchedGameListData, fetchData: fetchGamesListData, getCancelToken, resetData } = useGamesList()
  const {
    data: detailsData,
    data: { name, id, description_raw: descripton, background_image: backgroundImage, achievements_count: achievementsCount },
    error,
    loading,

    fetchData: fetchDetailsData,
  } = useGameDetails()
  useEffect(() => {
    window.scrollTo(0, 0)
    const cancelToken = getCancelToken()
    fetchDetailsData(`${url}/games/${slug}?key=${key}`)
    fetchGamesListData(`${url}/games/${slug}/game-series?key=${key}`)

    return () => {
      resetData(cancelToken)
    }
  }, [fetchDetailsData, fetchGamesListData, getCancelToken, resetData, slug])

  return (
    <Background>
      {error ? (
        <ErrorMessage>{'Something went wrong !'}</ErrorMessage>
      ) : (
        <Wrapper style={!loading ? { backgroundImage: `url(${backgroundImage})` } : { backgroundImage: 'none' }}>
          <Mask isLoading={loading}>
            <Title isLoading={loading} key={id}>
              {name}
            </Title>
            <RoundButton onClick={customSmoothScrollTo} isReturn={true} />

            <Screenshots isLoading={loading} slug={slug} />
            {Object.keys(detailsData).length !== 0 ? (
              <>
                <ArticleTemplate title={'About'}>{descripton}</ArticleTemplate>
                <InformationsTemplate>
                  {achievementsCount > 0 ? <AchievementsList achievementsFor={slug} /> : null}
                  <GameMetaWrapper data={detailsData} />
                  <PCRequirements data={detailsData} />
                </InformationsTemplate>
              </>
            ) : null}

            {fetchedGameListData.data.length !== 0 ? (
              <ListWrapper>
                <Title titleType="h2">Games like</Title>
                <GamesList endMessage={false} fetchMoreData={fetchGamesListData} fetchedData={fetchedGameListData} />
              </ListWrapper>
            ) : null}
          </Mask>
        </Wrapper>
      )}
    </Background>
  )
}

export default GameDetails
