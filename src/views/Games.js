import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { RAWGOptions } from 'utils/fetchingOptions'
import { Wrapper } from './Games.style'
const { url, key } = RAWGOptions
const Games = () => {
  const { slug } = useParams()
  const [{ id, name }, setData] = useState({})

  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${url}/games/${slug}?key=${key}`)
      .then(({ data }) => setData(data))
      .catch(() => setError('Something went wrong'))
  }, [slug])
  return <Wrapper>{!id && !error ? <p>loading...</p> : !error ? <h1 key={id}>{name}</h1> : <p>{error}</p>}</Wrapper>
}

export default Games
