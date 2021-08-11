import React, { useEffect } from 'react'
import { useGetListCoveredRegionsQuery } from 'features/DealsApi/DealsApi'
import Select from '../Select/Select'
import { Wrapper } from './DealsSelect.style'
import SelectSkeletonLoader from '../Select/SelectSkeletonLoader'
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { takeSelections } from 'store'
import { useDispatch } from 'react-redux'

const DealsSelect = () => {
  const { control } = useForm({
    defaultValues: {
      region: 'eu1',
      country: 'AL',
      shops: 'gog',
      price: 'asc',
    },
  })

  const dispatch = useDispatch()
  const { data, isLoading, error } = useGetListCoveredRegionsQuery()
  const selectsWatch = useWatch({
    control,
  })
  useEffect(() => {
    dispatch(takeSelections(selectsWatch))
  }, [selectsWatch, dispatch])

  return !error ? (
    <Wrapper>
      {isLoading
        ? Array(6)
            .fill('')
            .map((e, i) => <SelectSkeletonLoader key={i} />)
        : data.map(({ name, options }) => (
            <Controller
              key={name}
              control={control}
              name={name.toLowerCase()}
              render={({ field, onChange, value }) => <Select options={options} title={name} {...field} />}
            />
          ))}
    </Wrapper>
  ) : (
    <ErrorMessage>Something went wrong!</ErrorMessage>
  )
}
export default DealsSelect
