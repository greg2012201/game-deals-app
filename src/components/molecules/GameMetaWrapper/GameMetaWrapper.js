import { Score } from 'components/atoms/Score/Score'
import Title from 'components/atoms/Title/Title'
import React from 'react'
import { Link } from 'react-router-dom'
import GameMetaItem from '../GamesMetaItem/GameMetaItem'
import { MetaContentWrapper } from './GameMetaWrapper.style'
import { useConvertNestedObjectsInArrayIntoAnArrayOfObjects } from 'hooks/useConvertNestedObjectsInArrayIntoAnArrayOfObjects'
import { useGameDetails } from 'hooks/useGameDetails'

const GameMetaWrapper = () => {
  const {
    data,
    data: { parent_platforms: parentPlatforms, released, publishers, website, genres, metacritic, esrb_rating: ageRating, developers },
  } = useGameDetails()
  const { transformedData: platformData } = useConvertNestedObjectsInArrayIntoAnArrayOfObjects(parentPlatforms)

  return Object.keys(data).length !== 0 ? (
    <MetaContentWrapper>
      <Title titleType="h2">Meta</Title>
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
  ) : null
}

export default GameMetaWrapper
