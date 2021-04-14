import React from 'react'
import { mockProductList } from '../../../data/mockProductList'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'

const ProductList = () => {
  return (
    <StyledList>
      {mockProductList.map((productsData) => (
        <ProductCard key={productsData.id} productsData={productsData} />
      ))}
    </StyledList>
  )
}

export default ProductList
