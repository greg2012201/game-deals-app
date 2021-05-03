import React, { useRef, useContext, useEffect } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Genres.style'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { Button } from 'components/atoms/Button/Button'
import { customHorizontalScroll } from 'helpers/customScroll'
import { GamesContext } from 'providers/GamesDataProvider'

import { Link } from 'react-router-dom'

const scrollDistance = 200
export const Genres = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const {
    data: {
      genresData: { data },
    },
    fetchGenres,
  } = useContext(GamesContext)
  const handleOnClick = (direction) => {
    customHorizontalScroll(direction, buttonsWrapper, scrollDistance)
  }
  useEffect(() => {
    fetchGenres()
  }, [fetchGenres])

  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
        <Icon left="true" />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {data.map(({ name, id }) => {
          return (
            <Link key={name} to={`/${name}`}>
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
export default Genres