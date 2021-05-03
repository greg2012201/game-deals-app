import React from 'react'
import ProductList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
const Dashboard = () => {
  const { page } = useParams()
  return (
    <Wrapper>
      <h3>{page}</h3>
      <ProductList />
    </Wrapper>
  )
}

export default Dashboard
