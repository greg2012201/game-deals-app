import React from 'react'
import PropTypes from 'prop-types'

import { GameLink, GenresLink, GenresWrapper, Rating, StyledProductCard } from './GamesListItem.style'

const GamesListItem = ({ gamesData: { name, background_image, genres, slug, metacritic } }) => {
  return (
    <StyledProductCard>
      {background_image ? <img src={background_image} alt={name} /> : null}

      <GameLink to={`games/${slug}`}>{name}</GameLink>
      {metacritic ? <Rating>{metacritic}</Rating> : null}
      <GenresWrapper>
        <p>Genres: </p>
        <div>
          {genres.map((e) => (
            <GenresLink to={e.name} key={e.id}>
              {e.name}{' '}
            </GenresLink>
          ))}
        </div>
      </GenresWrapper>
    </StyledProductCard>
  )
}
GamesListItem.propTypes = {
  gamesData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string,
    genres: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}
export default GamesListItem
