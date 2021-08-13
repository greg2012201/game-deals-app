import RoundButton from 'components/atoms/RoundButton/RoundButton'
import DealsList from 'components/oraganisms/DealsList/DealsList'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import React from 'react'
import { Wrapper } from './Deals.style'

const Deals = () => {
  const handleOnClick = () => customSmoothScrollTo()
  return (
    <Wrapper>
      <DealsList />
      <RoundButton isReturn onClick={handleOnClick} />
    </Wrapper>
  )
}

export default Deals
