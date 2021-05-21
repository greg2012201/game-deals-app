import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { GameLink, GenresLink, GenresWrapper, Rating, StyledProductCard } from './GamesListItem.style'
import { useLocation } from 'react-router'
import { useScrollToTopWhenClickedLinkIsSameAsCurrentURL } from 'hooks/useScrollToTopWhenClickedLinkIsSameAsCurrentURL'
const GamesListItem = ({ gamesData: { name, background_image, genres, slug, metacritic } }) => {
  const { pathname } = useLocation()
  const { handleOnClick } = useScrollToTopWhenClickedLinkIsSameAsCurrentURL(pathname)

  return (
    <StyledProductCard>
      {background_image ? <img data-testid="image" src={background_image} alt={name} /> : <img data-testid="image" src="" alt={name} />}

      <GameLink data-testid="game-link" to={`/games/${slug}`}>
        {name}
      </GameLink>
      {metacritic ? (
        <Rating data-testid="metascore" value={metacritic} data-tip="Metascore">
          {metacritic}
          <ReactTooltip data-testid="tooltip" />
        </Rating>
      ) : null}
      <GenresWrapper>
        Genres:
        <li>
          {genres.map((e) => (
            <GenresLink data-testid="genre-link" onClick={(e) => handleOnClick(e)} to={`/genres/${e.slug}`} key={e.id}>
              {e.name}{' '}
            </GenresLink>
          ))}
        </li>
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
    metacritic: PropTypes.number,
  }),
}
export default GamesListItem
