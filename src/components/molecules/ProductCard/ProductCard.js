import React from 'react'
import PropTypes from 'prop-types'
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
          <span key={e.id}>{e.name}</span>
        ))}
      </p>
    </StyledProductCard>
  )
}
ProductCard.propTypes = {
  gamesData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string,
    genres: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}
export default ProductCard
