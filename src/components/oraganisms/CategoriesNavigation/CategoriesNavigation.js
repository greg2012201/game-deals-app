import React, { useRef } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { ButtonsWrapper, PaginationButton, Wrapper } from './CategoriesNaviagation.style'
const mockCategoryList = [
  { text: 'mockButton1' },
  { text: 'mockButton2' },
  { text: 'mockButton3' },
  { text: 'mockButton4' },
  { text: 'mockButton5' },
  { text: 'mockButton6' },
  { text: 'mockButton7' },
  { text: 'mockButton8' },
]
const scrollDistance = 100
export const CategoriesNavigation = () => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    if (direction === 'right') {
      buttonsWrapper.current.scrollLeft += scrollDistance
    } else {
      buttonsWrapper.current.scrollLeft -= scrollDistance
    }
  }

  return (
    <Wrapper>
      <PaginationButton className="left" onClick={() => handleOnClick('left')} />

      <ButtonsWrapper ref={buttonsWrapper}>
        {mockCategoryList.map(({ text }) => {
          return <button key={text}>{text}</button>
        })}
      </ButtonsWrapper>

      <PaginationButton className="right" onClick={() => handleOnClick('right')} />
    </Wrapper>
  )
}
export default CategoriesNavigation
