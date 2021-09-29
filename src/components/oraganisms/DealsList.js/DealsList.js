import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import React from 'react';
import { Wrapper } from './DealsList.style';
import { useErrorPage } from 'hooks/useErrorPage';
import { useAuth } from 'hooks/useAuth';
import { useHistory } from 'react-router';
import { pathsList } from 'routes';
const { loginPage } = pathsList;
const DealsList = ({
  data,
  handleOnClick,
  checkIsOnWishList,
  firestoreConnecting,
  isWishList = false,
}) => {
  const {
    data: { user },
  } = useAuth();
  useErrorPage(data.isError);
  const history = useHistory();
  const redirect = () => {
    return history.push(loginPage);
  };

  return (
    <Wrapper>
      {data.isLoading || firestoreConnecting
        ? Array(20)
            .fill('')
            .map((_blank, i) => <DealsListItemSkeletonLoader key={i} />)
        : data.list.map((item, i) => {
            return (
              <DealsListItem
                isOnWishList={!isWishList ? checkIsOnWishList(item.plain) : isWishList}
                data={item}
                handleOnClick={handleOnClick}
                key={i}
                isAuthenticated={user}
                redirect={redirect}
              />
            );
          })}
      ;
    </Wrapper>
  );
};
export default DealsList;
