import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StyledProductCard } from './ProductCard.style'

const ProductCard = ({ gamesData: { name, background_image, genres, slug } }) => {
  return (
    <StyledProductCard>
      {background_image ? <img src={background_image} alt={name} /> : null}

      <Link to={`games/${slug}`}>
        <h2>{name}</h2>
      </Link>
      <p className="price">
        {genres.map((e) => (
          <span>{e.name}</span>
        ))}
      </p>
    </StyledProductCard>
  )
}

export default ProductCard
