import React from 'react'
import { Button } from './../../atoms/Button/Button'
import { StyledProductCard } from './ProductCard.style'

const ProductCard = ({ productsData: { title, description = 'description', shop, image } }) => {
  return (
    <StyledProductCard>
      {image ? <img src={image} alt={title} /> : null}

      <h2>{title}</h2>
      <p className="price">100</p>
      <p className="before">20</p>
      <p className="difference">80%</p>
      <p className="description">{description}</p>

      <Button className="comment">Leave a comment </Button>
      <Button className="link">
        <a href={`${shop}`} target="_blank">
          Go to the shop
        </a>
      </Button>
    </StyledProductCard>
  )
}

export default ProductCard
