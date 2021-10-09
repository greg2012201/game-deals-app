import React from 'react';
import ProductCard from 'components/molecules/GamesListItem/GamesListItem';
import { StyledEndMessage, StyledListWrapper, StyledList, StyledLoader } from './GamesList.style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTheme } from 'styled-components';
import GamesListSkeletonLoader from 'components/atoms/GamesListSkeletonLoader/GamesListSkeletonLoader';
import Title from 'components/atoms/Title/Title';
import { useGetGamesListQuery } from 'features/GamesListApi/GamesListApi';
import { useInfiniteGamesListQuery } from 'hooks/useInfiniteGamesListQuery';
import { useErrorPage } from 'hooks/useErrorPage';
const GamesList = ({ endMessage = 'Yay! You have seen it all', title = null, fecthingRoute }) => {
  const theme = useTheme();
  const {
    handleFetchMoreData,
    data,
    isLoading,
    isEmpty,
    hasError,
    limit,
    hasNextPage,
  } = useInfiniteGamesListQuery({
    query: useGetGamesListQuery,
    endpoint: fecthingRoute,
  });
  useErrorPage(hasError);
  if (data.length === 0 && !isLoading) {
    return null;
  }
  return (
    <StyledListWrapper>
      {isEmpty && isLoading ? (
        <StyledList>
          {Array(20)
            .fill('')
            .map((_blank, i) => (
              <GamesListSkeletonLoader key={i} />
            ))}
        </StyledList>
      ) : (
        <InfiniteScroll
          scrollThreshold={'500px'}
          dataLength={data.length}
          next={handleFetchMoreData}
          hasMore={data.length !== limit || hasNextPage}
          endMessage={
            endMessage ? (
              <StyledEndMessage style={{ textAlign: 'center' }}>{endMessage}</StyledEndMessage>
            ) : null
          }
          loader={
            !hasError && data.length > 0 ? (
              <StyledLoader type="ThreeDots" color={`${theme.colors.white}`} />
            ) : null
          }
        >
          {title && <Title titleType="h2">{title}</Title>}
          <StyledList>
            {data.map((data) => (
              <ProductCard key={data.id} gamesData={data} />
            ))}
          </StyledList>
        </InfiniteScroll>
      )}
    </StyledListWrapper>
  );
};

export default GamesList;
