import AchievementsListItem from 'components/molecules/AchievementsListItem/AchievementsListItem'
import React, { useEffect, useState, useRef } from 'react'
import Pagination from 'rc-pagination'
import { StyledAchivementsList } from './Achievements.style'
import { useAchievementsList } from './useAchievementsList'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions

const AchievementsList = ({ achievementsFor, achievementsCount }) => {
  const listRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [initialPage, setInitialPage] = useState(true)
  const {
    fetchData,
    getCancelToken,
    resetData,
    achievements,
    page: { count },
  } = useAchievementsList()

  const handleOnPageChange = (current) => {
    if (listRef.current === null || undefined) return
    listRef.current.scrollIntoView()
    return current !== currentPage ? setCurrentPage(current) : null
  }
  useEffect(() => {
    setInitialPage(false)
    setCurrentPage(1)
  }, [achievementsFor])
  useEffect(() => {
    const cancelToken = getCancelToken()
    if (initialPage) return
    fetchData(`${url}/games/${achievementsFor}/achievements?page=${currentPage}&key=${key}`, cancelToken)
    return () => (!initialPage ? resetData(cancelToken) : null)
  }, [achievementsFor, currentPage, fetchData, initialPage, getCancelToken, resetData])
  return (
    <StyledAchivementsList ref={listRef}>
      {achievements.map((achievements, i) => {
        return <AchievementsListItem key={i} achievementsData={achievements} />
      })}
      <Pagination onChange={handleOnPageChange} pageSize={10} total={count} current={currentPage} className={'pagination'} />
    </StyledAchivementsList>
  )
}

export default AchievementsList
