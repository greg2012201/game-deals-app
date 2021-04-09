import React, { useRef, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { ButtonsWrapper, PaginationButton, Wrapper } from './CategoriesNaviagation.style'
smoothscroll.polyfill()

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
const scrollDistance = 200
export const CategoriesNavigation = () => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    if (direction === 'right') {
      buttonsWrapper.current.scrollBy({ top: 0, left: scrollDistance, behavior: 'smooth' })
    } else {
      buttonsWrapper.current.scrollBy({ top: 0, left: -scrollDistance, behavior: 'smooth' })
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
