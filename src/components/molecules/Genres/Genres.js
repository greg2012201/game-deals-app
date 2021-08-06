import React from 'react'
import { StyledLinkButton } from './Genres.style'
import { useGenres } from 'hooks/useGenres'
import { states } from 'utils/state/states'
import LinkButtonSkeletonLoader from './LinkButtonSkeletonLoader'
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'

export const Genres = () => {
  const {
    data: { results: genres },
    compareState,
    error,
  } = useGenres()

  return !error ? (
    <>
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
    </>
  ) : (
    <ErrorMessage>{error}</ErrorMessage>
  )
}
export default Genres
