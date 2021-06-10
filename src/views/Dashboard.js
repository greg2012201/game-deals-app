import React, { useContext, useEffect } from 'react'
import GamesList from 'components/oraganisms/GamesList/GamesList'
import { useParams } from 'react-router'
import { Wrapper } from './Dashboard.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useTitleByRoute } from 'hooks/useTitleByRoute'
import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { useVisibilityOnScroll } from 'hooks/useVisibilityOnScroll'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import Title from 'components/atoms/Title/Title'
import { useFetchData } from 'hooks/useFetchData'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions
const Dashboard = () => {
  const {
    data: {
      genresData: { data },
    },
  } = useContext(GamesContext)
  const isVisible = useVisibilityOnScroll()
  const { page, slug } = useParams()
  const { title } = useTitleByRoute(data, slug)

  const { fetchedData, resetData, fetchData, getCancelToken } = useFetchData()

  useEffect(() => {
    const cancelToken = getCancelToken()
    if (page === 'Home') {
      fetchData(`${url}/games?key=${key}`, cancelToken)
    } else if (page === 'genres') fetchData(`${url}/games?genres=${slug}&key=${key}`, cancelToken)
    return () => {
      resetData(cancelToken)
    }
  }, [page, fetchData, slug, resetData, getCancelToken])

  return (
    <Wrapper>
      <Title>{slug ? title : page}</Title>
      <GamesList fetchMoreData={fetchData} fetchedData={fetchedData} />
      <RoundButton onClick={customSmoothScrollTo} isVisible={isVisible} isReturn={true} />
    </Wrapper>
  )
}

export default Dashboard
