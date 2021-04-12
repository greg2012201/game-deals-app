import React, { useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Categories.style'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Button } from '../../atoms/Button/Button'

smoothscroll.polyfill()
const mockCategoryList = [
  { text: 'mockButton1' },
  { text: 'mockButton2' },
  { text: 'mock' },
  { text: 'moctton4' },
  { text: 'mockButton5' },
  { text: 'mockButton6' },
  { text: 'mockButton7' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
  { text: 'mockButton8' },
]

const scrollDistance = 200
export const Categories = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    if (direction === 'right') {
      buttonsWrapper.current.scrollBy({ top: 0, left: scrollDistance, behavior: 'smooth' })
    } else {
      buttonsWrapper.current.scrollBy({ top: 0, left: -scrollDistance, behavior: 'smooth' })
    }
  }

  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left className="left" onClick={() => handleOnClick()}>
        <Icon left />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {mockCategoryList.map(({ text }) => {
          return <Button key={text}>{text}</Button>
        })}
      </ButtonsWrapper>
      <PaginationButton right className="right" onClick={() => handleOnClick('right')}>
        <Icon right />
      </PaginationButton>
    </Wrapper>
  )
})
export default Categories
