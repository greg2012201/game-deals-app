import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Mask, Wrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'
import Gallery from 'components/molecules/Gallery/Gallery'
import Title from 'components/atoms/Title/Title'

import ArticleTemplate from 'components/templates/ArticleTemplate/ArticleTemplate'

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const {
    data: { name, id, description_raw: descripton, background_image: backgroundImage },
    screenshots,
    error,
    fetchData,
  } = useGameDetails()
  const { isOpen, index, handleSliderClose, handleSliderOpen } = useSlider()
  useEffect(() => {
    fetchData([`${url}/games/${slug}?key=${key}`, `${url}/games/${slug}/screenshots?key=${key}`])
  }, [fetchData, slug])

  return (
    <Wrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Mask>
        {!id && !error ? (
          <p>loading...</p>
        ) : !error ? (
          <>
            <Title key={id}>{name}</Title>
            <>
              <Gallery handleSliderOpen={handleSliderOpen} images={screenshots} />
              <Slider handleSliderClose={handleSliderClose} isOpen={isOpen} images={screenshots} index={index} />
            </>
            <ArticleTemplate textContent={descripton} title={'About'} />
          </>
        ) : (
          <p>{error}</p>
        )}
      </Mask>
    </Wrapper>
  )
}

export default GameDetails
