import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import { useGetDealsListQuery } from 'features/DealsApi/DealsApi'
import { Wrapper } from './DealsList.style'
import { useSelector } from 'react-redux'

const DealsList = () => {
  const options = useSelector((state) => state.dealsListOptions)
  const { data, isLoading, isFetching } = useGetDealsListQuery(options)

  return (
    <Wrapper>
      {isFetching || isLoading ? <p>loading</p> : data.list.map((item, i) => <DealsListItem currency={data.currency} data={item} key={i} />)}
    </Wrapper>
  )
}

export default DealsList
