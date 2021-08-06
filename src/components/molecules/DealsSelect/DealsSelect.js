import React from 'react'
import { useGetListCoveredRegionsQuery } from 'features/DealsApi/DealsApi'
import Select from '../Select/Select'
import { Wrapper } from './DealsSelect.style'
const DealsSelect = () => {
  const { data, isLoading } = useGetListCoveredRegionsQuery()
  return <Wrapper>{!isLoading && data.map(({ name, options }) => <Select key={name} options={options} title={name} />)}</Wrapper>
}
export default DealsSelect
