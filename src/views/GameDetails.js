import React, { useEffect } from 'react'
import { useGameDetails } from 'hooks/useGameDetails'
import { useParams } from 'react-router'
import { Wrapper } from './GameDetails.style'
import { RAWGOptions } from 'utils/fetchingOptions'

const { url, key } = RAWGOptions
const GameDetails = () => {
  const {
    data: { name, id, description_raw, background_image_additional },
    screenshots,
    error,
    fetchData,
  } = useGameDetails()
  const { slug } = useParams()
  useEffect(() => {
    fetchData([`${url}/games/${slug}?key=${key}`, `${url}/games/${slug}/screenshots?key=${key}`])
  }, [fetchData, slug])

  return (
    <Wrapper>
      {!id && !error ? (
        <p>loading...</p>
      ) : !error ? (
        <>
          <h1 key={id}>{name}</h1>
          <p>{description_raw}</p>
          <img data-testid="image" src={background_image_additional} alt={name} />
          <div>
            {screenshots.map(({ image, id }) => (
              <img key={id} data-testid="image" src={image} alt={name} />
            ))}
          </div>
        </>
      ) : (
        <p>{error}</p>
      )}
    </Wrapper>
  )
}

export default GameDetails
