import React, { useEffect } from 'react';
import { StyledLinkButton } from './Genres.style';
import { useGenres } from 'hooks/useGenres';
import { states } from 'utils/state/states';
import LinkButtonSkeletonLoader from './LinkButtonSkeletonLoader';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

export const Genres = () => {
  const {
    data: { results: genres },
    compareState,
    error,
    getGenresData,
  } = useGenres();

  useEffect(() => {
    getGenresData();
  }, [getGenresData]);
  return !error ? (
    <>
      {compareState(states.hasLoaded)
        ? genres.map(({ name, slug, id }) => {
            return (
              <StyledLinkButton data-testid="genre-link" key={id} to={`/library/genres/${slug}`}>
                {name}
              </StyledLinkButton>
            );
          })
        : Array(20)
            .fill('')
            .map((_blank, i) => <LinkButtonSkeletonLoader key={i} />)}
    </>
  ) : (
    <ErrorMessage>{error}</ErrorMessage>
  );
};
export default Genres;
