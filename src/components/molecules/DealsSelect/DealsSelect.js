import React from 'react'
import { useGetListCoveredRegionsQuery } from 'features/DealsApi/DealsApi'
import Select from '../Select/Select'
import { Wrapper } from './DealsSelect.style'
import SelectSkeletonLoader from '../Select/SelectSkeletonLoader'
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
const DealsSelect = () => {
  const { data, isLoading, error } = useGetListCoveredRegionsQuery()
  return !error ? (
    <Wrapper>
      {isLoading
        ? Array(6)
            .fill('')
            .map((e, i) => <SelectSkeletonLoader key={i} />)
        : data.map(({ name, options }) => <Select key={name} options={options} title={name} />)}
    </Wrapper>
  ) : (
    <ErrorMessage>Something went wrong!</ErrorMessage>
  )
}
export default DealsSelect
