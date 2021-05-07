import React, { useRef, useContext, useEffect } from 'react'
import { ButtonsWrapper, PaginationButton, StyledLinkButton, Wrapper } from './Genres.style'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { customHorizontalScroll } from 'helpers/customScroll'
import { GamesContext } from 'providers/GamesDataProvider'
import { usePaginationButtons } from 'hooks/usePaginationButtons'

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
  const isPagination = usePaginationButtons(buttonsWrapper)
  useEffect(() => {
    fetchGenres()
  }, [fetchGenres])

  return (
    <Wrapper ref={ref} {...props}>
      {isPagination ? (
        <>
          <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
            <Icon left="true" />
          </PaginationButton>
          <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
            <Icon right="true" />
          </PaginationButton>
        </>
      ) : null}
      <ButtonsWrapper ref={buttonsWrapper}>
        {data.map(({ name, id }) => {
          return (
            <StyledLinkButton key={name} to={`/${name}`}>
              {name}
            </StyledLinkButton>
          )
        })}
      </ButtonsWrapper>
    </Wrapper>
  )
})
export default Genres
