import React, { useRef } from 'react'
import { ButtonsWrapper, PaginationButton, StyledLinkButton, Wrapper } from './Genres.style'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { horizontalMenuScroll } from 'helpers/horizontalMenuScroll'
import { usePaginationButtons } from 'hooks/usePaginationButtons'
import { useGenres } from 'hooks/useGenres'
import { states } from 'utils/state/states'
import LinkButtonSkeletonLoader from './LinkButtonSkeletonLoader'

const scrollDistance = 200
export const Genres = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const {
    data: { results: genres },
    compareState,
  } = useGenres()
  const handleOnClick = (direction) => {
    horizontalMenuScroll(direction, buttonsWrapper, scrollDistance)
  }
  const isPagination = usePaginationButtons(buttonsWrapper, compareState(states.isLoading))

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
        {compareState(states.hasLoaded)
          ? genres.map(({ name, slug, id }) => {
              return (
                <StyledLinkButton data-testid="genre-link" key={id} to={`/library/genres/${slug}`}>
                  {name}
                </StyledLinkButton>
              )
            })
          : Array(8)
              .fill('')
              .map((e, i) => <LinkButtonSkeletonLoader key={i} />)}
      </ButtonsWrapper>
    </Wrapper>
  )
})
export default Genres
