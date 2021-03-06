import RoundButton from 'components/atoms/RoundButton/RoundButton';
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo';
import React from 'react';
import { pathsList } from 'routes';
import WishList from 'components/oraganisms/WishList/WishList';
import { Route } from 'react-router-dom';
import InfiniteDealsList from 'components/oraganisms/InfiniteDealsList/InfiniteDealsList';
import { Wrapper } from './Deals.style';
import Title from 'components/atoms/Title/Title';
import { useFirestoreConnect } from 'react-redux-firebase';
import { DealsTemplate } from 'components/templates/DealsTemplate/DealsTemplate';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from 'components/oraganisms/PrivateRoute/PrivateRoute';
const { deals, wishList } = pathsList;
const Deals = () => {
  const handleOnClick = () => customSmoothScrollTo();
  const {
    data: { user },
  } = useAuth();
  useFirestoreConnect(() =>
    !user
      ? null
      : [
          {
            collection: 'users',
            doc: `${user}`,
            subcollections: [{ collection: 'wishList' }],
            storeAs: `userWishList`,
          },
        ]
  );
  return (
    <Wrapper>
      <DealsTemplate>
        <Route exact path={`${deals}`}>
          <Title titleType="h1">Deals</Title>
          <InfiniteDealsList />
        </Route>
        <PrivateRoute path={`${deals}${wishList}`}>
          <WishList />
        </PrivateRoute>
        <RoundButton isReturn onClick={handleOnClick} />
      </DealsTemplate>
    </Wrapper>
  );
};

export default Deals;
