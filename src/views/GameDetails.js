import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Wrapper, ScreenshotsWrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'
import 'swiper/swiper-bundle.css'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'

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
          <h1 key={id}>{name}</h1>
          <>
            <ScreenshotsWrapper>
              {screenshots.map(({ image, id }, i) => (
                <img onClick={(e) => handleSliderOpen(e)} index={i} key={id} data-testid="image" src={image} alt={name} />
              ))}
            </ScreenshotsWrapper>
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
