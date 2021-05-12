import React from 'react'
import ProductList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
const Dashboard = () => {
  const { page, detail } = useParams()
  return (
    <Wrapper>
      <h3>{detail ? detail : page}</h3>
      <ProductList />
    </Wrapper>
  )
}

export default Dashboard
