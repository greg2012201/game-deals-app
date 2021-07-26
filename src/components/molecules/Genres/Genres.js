import React, { useRef, useEffect } from 'react'
import { ButtonsWrapper, PaginationButton, StyledLinkButton, Wrapper } from './Genres.style'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { horizontalMenuScroll } from 'helpers/horizontalMenuScroll'
import { usePaginationButtons } from 'hooks/usePaginationButtons'
import { useGenresData } from 'hooks/useGenresData'
import { states } from 'utils/state/states'

const scrollDistance = 200
export const Genres = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const { data, fetchGenres, compareState } = useGenresData()
  const handleOnClick = (direction) => {
    horizontalMenuScroll(direction, buttonsWrapper, scrollDistance)
  }
  const isPagination = usePaginationButtons(buttonsWrapper, compareState(states.isLoading))
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
      <ButtonsWrapper data-testid="buttons-wrapper" ref={buttonsWrapper}>
        {data.map(({ name, slug, id }) => {
          return (
            <StyledLinkButton data-testid="genre-link" key={id} to={`/genres/${slug}`}>
              {name}
            </StyledLinkButton>
          )
        })}
      </ButtonsWrapper>
    </Wrapper>
  )
})
export default Genres
