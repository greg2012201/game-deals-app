import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper'
import { Wrapper } from './Slider.style'

const Slider = ({ images, handleSliderClose, isOpen, index }) => {
  SwiperCore.use([Navigation, Pagination, Keyboard])
  return (
    <Wrapper
      style={{ overlay: { zIndex: 10, backgroundColor: 'black' } }}
      portalClassName={'ReactModalPortal'}
      className={'MODAL'}
      appElement={document.getElementById('app')}
      onRequestClose={handleSliderClose}
      shouldCloseOnEsc={true}
      isOpen={isOpen}
    >
      {isOpen ? (
        <Swiper keyboard={true} initialSlide={index} navigation pagination>
          {images.map(({ image, id }, i) => (
            <SwiperSlide key={i}>
              <img index={i} key={id} data-testid="image" src={image} alt="game" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}

      <button onClick={handleSliderClose}>close</button>
    </Wrapper>
  )
}

export default Slider
