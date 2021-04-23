import React, { useContext } from 'react'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { Button } from './../../atoms/Button/Button'
import { StyledProductCard } from './ProductCard.style'

const ProductCard = ({ gamesData: { name, background_image, genres } }) => {
  return (
    <StyledProductCard>
      {background_image ? <img src={background_image} alt={name} /> : null}

      <h2>{name}</h2>
      <p className="price">
        {genres.map((e) => (
          <span>{e.name}</span>
        ))}
      </p>
    </StyledProductCard>
  )
}

export default ProductCard
