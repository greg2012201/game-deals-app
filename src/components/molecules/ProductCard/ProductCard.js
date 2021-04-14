import React from 'react'
import { Button } from './../../atoms/Button/Button'
import { StyledProductCard } from './ProductCard.style'

const ProductCard = ({ productsData: { title, price, description, source, thumbnail } }) => {
  return (
    <StyledProductCard>
      {thumbnail ? <img src={thumbnail} alt={title} /> : null}
      <h2>{title}</h2>
      <p className="price">{price.current}</p>
      <p className="before">{price.before}</p>
      <p className="difference">{price.difference}</p>
      <p className="description">{description}</p>

      <Button className="comment">Leave a comment </Button>
      <Button className="link">
        <a href={source} target="_blank">
          Go to the shop
        </a>
      </Button>
    </StyledProductCard>
  )
}

export default ProductCard
