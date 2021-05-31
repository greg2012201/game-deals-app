import React from 'react'
import { Wrapper, ImgItem } from './Gallery.style'

function Gallery({ handleSliderOpen, images }) {
  return (
    <Wrapper>
      {images.map(({ image, id, name }, i) => (
        <ImgItem onClick={(e) => handleSliderOpen(e)} data-index={i} key={id} data-testid="image" src={image} alt={name} />
      ))}
    </Wrapper>
  )
}

export default Gallery
