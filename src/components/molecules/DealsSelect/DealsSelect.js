import React, { useEffect } from 'react';
import { useGetListCoveredRegionsQuery } from 'features/DealsApi/DealsApi';
import Select from '../Select/Select';
import { Wrapper } from './DealsSelect.style';
import SelectSkeletonLoader from '../Select/SelectSkeletonLoader';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { initialSelectsState } from 'utils/selectDataOptions';
import {
  setNextSortOptions,
  setIsSortOptionLoading,
} from 'features/DealsInfiniteScrollSlice/DealsInfiniteScrollSlice';

const DealsSelect = () => {
  const { control } = useForm({
    defaultValues: initialSelectsState,
  });

  const dispatch = useDispatch();
  const { data, isLoading, error, isSuccess } = useGetListCoveredRegionsQuery();
  const selectsWatch = useWatch({
    control,
  });
  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsSortOptionLoading(false));
      dispatch(setNextSortOptions(selectsWatch));
    }
  }, [selectsWatch, dispatch, isSuccess]);

  return !error ? (
    <Wrapper>
      {isLoading
        ? Array(3)
            .fill('')
            .map((_blank, i) => <SelectSkeletonLoader key={i} />)
        : data.map(({ name, options }) => (
            <Controller
              key={name}
              control={control}
              name={name.toLowerCase()}
              render={({ field }) => <Select options={options} title={name} {...field} />}
            />
          ))}
    </Wrapper>
  ) : (
    <ErrorMessage>Something went wrong!</ErrorMessage>
  );
};
export default DealsSelect;
