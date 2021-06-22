import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Mask, Wrapper, ListWrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'
import Gallery from 'components/molecules/Gallery/Gallery'
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

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const { fetchedData: fetchedGameListData, fetchData: fetchGamesListData, getCancelToken, resetData } = useGamesList()
  const {
    data: detailsData,
    data: { name, id, description_raw: descripton, background_image: backgroundImage, achievements_count: achievementsCount },
    screenshots,
    error,

    fetchData: fetchDetailsData,
  } = useGameDetails()

  const { isOpen, index, handleSliderClose, handleSliderOpen } = useSlider()
  useEffect(() => {
    window.scrollTo(0, 0)
    const cancelToken = getCancelToken()
    fetchDetailsData([`${url}/games/${slug}?key=${key}`, `${url}/games/${slug}/screenshots?key=${key}`])
    fetchGamesListData(`${url}/games/${slug}/game-series?key=${key}`)

    return () => resetData(cancelToken)
  }, [fetchDetailsData, fetchGamesListData, getCancelToken, resetData, slug])

  return (
    <Wrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Mask>
        {!id && !error ? (
          <p>loading...</p>
        ) : !error ? (
          <>
            <Title key={id}>{name}</Title>
            <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
            <>
              <Gallery handleSliderOpen={handleSliderOpen} images={screenshots} />
              <Slider handleSliderClose={handleSliderClose} isOpen={isOpen} images={screenshots} index={index} />
            </>
            <ArticleTemplate title={'About'}>{descripton}</ArticleTemplate>
            <InformationsTemplate>
              {achievementsCount > 0 ? <AchievementsList achievementsFor={slug} /> : null}
              <GameMetaWrapper data={detailsData} />
              <PCRequirements data={detailsData} />
            </InformationsTemplate>

            {fetchedGameListData.data.length !== 0 ? (
              <ListWrapper>
                <Title titleType="h2">Games like</Title>
                <GamesList endMessage={false} fetchMoreData={fetchGamesListData} fetchedData={fetchedGameListData} />
              </ListWrapper>
            ) : null}
          </>
        ) : (
          <p>{error}</p>
        )}
      </Mask>
    </Wrapper>
  )
}

export default GameDetails
