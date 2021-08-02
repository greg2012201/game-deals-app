import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { GameLink, GenresLink, GenresWrapper, StyledProductCard } from './GamesListItem.style'
import { useLocation } from 'react-router'
import { useScrollToTopWhenClickedLinkIsSameAsCurrentURL } from 'hooks/useScrollToTopWhenClickedLinkIsSameAsCurrentURL'
import { Score } from 'components/atoms/Score/Score'
import { pathsList } from 'routes'
const { library, games, genres: genresRoute } = pathsList
const GamesListItem = ({ gamesData: { name, background_image, genres, slug, metacritic } }) => {
  const { pathname } = useLocation()
  const { handleOnClick } = useScrollToTopWhenClickedLinkIsSameAsCurrentURL(pathname)

  return (
    <StyledProductCard>
      {background_image ? <img data-testid="image" src={background_image} alt={name} /> : <img data-testid="image" src="" alt={name} />}

      <GameLink data-testid="game-link" to={`${library}${games}/${slug}`}>
        {name}
      </GameLink>
      {metacritic ? (
        <Score data-testid="metascore" value={metacritic} data-tip="Metascore">
          {metacritic}
          <ReactTooltip data-testid="tooltip" />
        </Score>
      ) : null}
      <GenresWrapper>
        Genres:
        <li>
          {genres.map((e) => (
            <GenresLink data-testid="genre-link" onClick={(e) => handleOnClick(e)} to={`${library}${genresRoute}/${e.slug}`} key={e.id}>
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
