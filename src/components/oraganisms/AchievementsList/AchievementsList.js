import AchievementsListItem from 'components/molecules/AchievementsListItem/AchievementsListItem'
import React, { useRef } from 'react'
import Pagination from 'rc-pagination'
import { StyledAchivementsList } from './Achievements.style'
import { useAchievementsListData } from './useAchievementsListData'
import { usePagination } from './usePagination'
import Title from 'components/atoms/Title/Title'
import AchievementsListItemSkeletonLoader from 'components/molecules/AchievementsListItem/AchievementsListItemSkeletonLoader'
const pageSize = 4
const AchievementsList = ({ achievementsFor }) => {
  const listRef = useRef(null)

  const {
    fetchData,
    loading,
    getCancelToken,
    resetData,
    achievements,
    page: { count },
  } = useAchievementsListData()
  const { handleOnPageChange, currentPage } = usePagination({ pageSize, achievementsFor, fetchData, resetData, getCancelToken, listRef })

  return (
    <StyledAchivementsList ref={listRef}>
      <Title titleType="h2">Achievements</Title>
      {loading || achievements.length === 0
        ? Array(4)
            .fill('')
            .map((e, i) => <AchievementsListItemSkeletonLoader key={i} />)
        : achievements.map((achievements, i) => {
            return <AchievementsListItem key={i} achievementsData={achievements} />
          })}
      <Pagination
        onChange={handleOnPageChange}
        pageSize={pageSize}
        total={count}
        current={currentPage}
        className={'pagination'}
        nextIcon={'>'}
        prevIcon={'<'}
        jumpPrevIcon={'...'}
        jumpNextIcon={'...'}
      />
    </StyledAchivementsList>
  )
}

export default AchievementsList
