import React, { useRef, useContext, useEffect, useState } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Categories.style'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Button } from '../../atoms/Button/Button'
import { customHorizontalScroll } from '../../../helpers/customScroll'
import { GamesContext } from '../../../providers/GamesDataProvider'

import { Link, useParams } from 'react-router-dom'

const scrollDistance = 200
export const Categories = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const { genres } = useContext(GamesContext)

  const handleOnClick = (direction) => {
    customHorizontalScroll(direction, buttonsWrapper, scrollDistance)
  }
  useEffect(() => {}, [])

  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
        <Icon left="true" />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {genres.map(({ name, id }) => {
          return (
            <Link to={`/${name}`}>
              <Button name={name} key={id}>
                {name}
              </Button>
            </Link>
          )
        })}
      </ButtonsWrapper>
      <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
        <Icon right="true" />
      </PaginationButton>
    </Wrapper>
  )
})
export default Categories
