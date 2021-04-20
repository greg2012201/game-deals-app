import React, { useRef, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Categories.style'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Button } from '../../atoms/Button/Button'
import { customHorizontalScroll } from '../../../helpers/customScroll'
import { mockCategoryList } from '../../../data/mockCategoryList'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { clearConfigCache } from 'prettier'

const scrollDistance = 200
export const Categories = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    customHorizontalScroll(direction, buttonsWrapper, scrollDistance)
  }

  const { gamesData } = useContext(GamesContext)

  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
        <Icon left="true" />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {gamesData.map(({ data: { genres } }) => {
          {
            // trzeba pobrać osobną listę gatunków i na jej podstawie tutaj to wrzucić i wcześniej przefiltrować czy istnieją takie gatunki na wyświetlonym dashboardzie, albo wyświetlać z góry już jakieś względem gatunku
            /*  return <Button key={e.id}>{e.name}</Button> */
          }
        })}
      </ButtonsWrapper>
      <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
        <Icon right="true" />
      </PaginationButton>
    </Wrapper>
  )
})
export default Categories
