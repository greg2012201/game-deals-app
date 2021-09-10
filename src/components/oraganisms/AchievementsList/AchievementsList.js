import AchievementsListItem from 'components/molecules/AchievementsListItem/AchievementsListItem';
import React, { useRef, useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { StyledAchivementsList } from './AchievementsList.style';
import { usePagination } from './usePagination';
import Title from 'components/atoms/Title/Title';
import AchievementsListItemSkeletonLoader from 'components/molecules/AchievementsListItem/AchievementsListItemSkeletonLoader';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { states } from 'utils/state/states';
import { useParams } from 'react-router';
import { useFetchData } from 'hooks/useFetchData';
const pageSize = 4;
const AchievementsList = () => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const { fetchData, getCancelToken, compareState, resetData, error } = useFetchData(setData);
  useEffect(() => {
    if (data) {
      return setCount(data.count);
    }
  }, [data, setCount]);

  const listRef = useRef(null);
  const { slug } = useParams();

  const { handleOnPageChange, currentPage } = usePagination({
    pageSize,
    slug,
    fetchData,
    resetData,
    getCancelToken,
    listRef,
    compareState,
  });

  return (
    <StyledAchivementsList ref={listRef}>
      <Title titleType="h2">Achievements</Title>
      {compareState(states.hasError) ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : compareState(states.isLoading) || compareState(states.idle) ? (
        Array(4)
          .fill('')
          .map((e, i) => <AchievementsListItemSkeletonLoader key={i} />)
      ) : (
        data.results.map((achievements, i) => {
          return <AchievementsListItem key={achievements.id} achievementsData={achievements} />;
        })
      )}
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
  );
};

export default AchievementsList;
