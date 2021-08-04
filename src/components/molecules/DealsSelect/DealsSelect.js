import React from 'react'
import Select from '../Select/Select'
import { Wrapper } from './DealsSelect.style'
const categories = [
  { name: 'price', options: ['chocolate', 'strawberry', 'vanilla'] },
  { name: 'region', options: ['EU', 'US'] },
]
const DealsSelect = () => {
  return (
    <Wrapper>
      {categories.map(({ options, name }) => (
        <Select key={name} options={options} title={name} />
      ))}
    </Wrapper>
  )
}

export default DealsSelect
