import React from 'react'
import { useGameDetail } from 'hooks/useGameDetail'
import { useParams } from 'react-router'
import { Wrapper } from './Games.style'

const Games = () => {
  const { slug } = useParams()

  const {
    data: { id, name },
    error,
  } = useGameDetail(slug)

  return <Wrapper>{!id && !error ? <p>loading...</p> : !error ? <h1 key={id}>{name}</h1> : <p>{error}</p>}</Wrapper>
}

export default Games
