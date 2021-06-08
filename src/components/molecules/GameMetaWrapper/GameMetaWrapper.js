import { Score } from 'components/atoms/Score/Score'
import React from 'react'
import { Link } from 'react-router-dom'
import GameMetaItem from '../GamesMetaItem/GameMetaItem'
import { MetaContentWrapper } from './GameMetaWrapper.style'

const GameMetaWrapper = ({
  data: { parent_platforms: parentPlatforms, released, publishers, website, genres, metacritic, esrb_rating: ageRating, developers },
}) => {
  let platformData = []
  parentPlatforms.map(({ platform }) => platformData.push(platform))

  return (
    <MetaContentWrapper>
      <GameMetaItem title="Platforms" data={platformData} />
      <GameMetaItem title="Genres">
        {genres.map(({ id, name, slug }) => (
          <Link to={`/genres/${slug}`} key={id}>
            {name}
          </Link>
        ))}
      </GameMetaItem>
      <GameMetaItem title="Release Date" text={released} />
      <GameMetaItem title="Publishers" data={publishers} />
      <GameMetaItem title="Developer" data={developers} />
      {metacritic ? (
        <GameMetaItem title="Metascore">
          <Score value={metacritic}>{metacritic}</Score>
        </GameMetaItem>
      ) : null}
      {ageRating ? <GameMetaItem title="Age rating" text={ageRating.name} /> : null}
      <GameMetaItem handleClassName={'hasLink'} title="Website">
        <a target={'_blank'} rel={'noreferrer'} href={website}>
          {website}
        </a>
      </GameMetaItem>
    </MetaContentWrapper>
  )
}

export default GameMetaWrapper
