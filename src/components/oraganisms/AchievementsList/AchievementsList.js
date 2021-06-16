import AchievementsListItem from 'components/molecules/AchievementsListItem/AchievementsListItem'
import React, { useRef } from 'react'
import Pagination from 'rc-pagination'
import { StyledAchivementsList } from './Achievements.style'
import { useAchievementsList } from './useAchievementsList'
import { usePagination } from './usePagination'

const AchievementsList = ({ achievementsFor }) => {
  const listRef = useRef(null)

  const {
    fetchData,
    getCancelToken,
    resetData,
    achievements,
    page: { count },
  } = useAchievementsList()
  const { handleOnPageChange, currentPage } = usePagination({ achievementsFor, fetchData, resetData, getCancelToken, listRef })
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
