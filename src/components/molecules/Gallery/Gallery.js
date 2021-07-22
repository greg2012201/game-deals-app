import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
import React from 'react'
import { Wrapper, ImgItem } from './Gallery.style'
import GallerySkeletonLoader from './GallerySkeletonLoader'
import { states } from 'utils/state/states'

function Gallery({ handleSliderOpen, images, compareState }) {
  return (
    <Wrapper>
      {compareState(states.hasError) && <ErrorMessage>Ups! Something went wrong. We can't load images.</ErrorMessage>}
      {compareState(states.isLoading)
        ? Array(5)
            .fill('')
            .map((e, i) => <GallerySkeletonLoader index={i} key={i} />)
        : images.map(({ image, id, name }, i) => (
            <ImgItem onClick={(e) => handleSliderOpen(e)} data-index={i} key={id} data-testid="image" src={image} alt={name} />
          ))}
    </Wrapper>
  )
}

export default Gallery
