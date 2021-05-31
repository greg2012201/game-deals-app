import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Wrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'
import Gallery from 'components/molecules/Gallery/Gallery'
import { Title } from 'components/atoms/Title/Title.style'

const { url, key } = RAWGOptions
const GameDetails = () => {
  const { slug } = useParams()
  const {
    data: { name, id, description_raw /* background_image_additional */ },
    screenshots,
    error,
    fetchData,
  } = useGameDetails()
  const { isOpen, index, handleSliderClose, handleSliderOpen } = useSlider()
  useEffect(() => {
    fetchData([`${url}/games/${slug}?key=${key}`, `${url}/games/${slug}/screenshots?key=${key}`])
  }, [fetchData, slug])

  return (
    <Wrapper>
      {!id && !error ? (
        <p>loading...</p>
      ) : !error ? (
        <>
          <Title key={id}>{name}</Title>
          <>
            <Gallery handleSliderOpen={handleSliderOpen} images={screenshots} />
            <Slider handleSliderClose={handleSliderClose} isOpen={isOpen} images={screenshots} index={index} />
          </>
          <p>{description_raw}</p>
        </>
      ) : (
        <p>{error}</p>
      )}
    </Wrapper>
  )
}

export default GameDetails
