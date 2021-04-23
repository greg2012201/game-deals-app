import React, { useRef, useContext } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Categories.style'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Button } from '../../atoms/Button/Button'
import { customHorizontalScroll } from '../../../helpers/customScroll'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { useCategoriesButtonsData } from '../../../hooks/useCategoriesButtonsData'

const scrollDistance = 200
export const Categories = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)
  const genres = useCategoriesButtonsData()
  const handleOnClick = (direction) => {
    customHorizontalScroll(direction, buttonsWrapper, scrollDistance)
  }
  const { displayGenreOnClick } = useContext(GamesContext)
  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
        <Icon left="true" />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {genres.map(({ name, id }) => (
          <Button name={name} onClick={(e) => displayGenreOnClick(e, id)} key={id}>
            {name}
          </Button>
        ))}
      </ButtonsWrapper>
      <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
        <Icon right="true" />
      </PaginationButton>
    </Wrapper>
  )
})
export default Categories
