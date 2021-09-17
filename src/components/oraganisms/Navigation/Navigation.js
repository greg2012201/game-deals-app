import React, { useEffect, useState, useRef } from 'react';
import Genres from 'components/molecules/Genres/Genres';
import Menu from 'components/molecules/Menu/Menu';
import TopPanel from 'components/atoms/TopPanel/TopPanel';
import SearchBar from 'components/oraganisms/SearchBar/SearchBar';
import { Route, Switch } from 'react-router-dom';
import { pathsList } from 'routes';
import BottomPanel from 'components/molecules/BottomPanel/BottomPanel';
import HorizontalMenu from 'components/molecules/HorizontalMenu/HorizontalMenu';
import DealsLinkButton from 'components/atoms/DealsLinkButton/DealsLinkButton';
import { useWishListFirestore } from '../WishList/useWishListFirestore';
import AuthLink from 'components/atoms/AuthLink/AuthLink';
import { useLocation } from 'react-use';

const { library, deals, wishList, loginPage } = pathsList;
const Navigation = () => {
  const categoriesRef = useRef();
  const [refs, setRefs] = useState(null);
  const { pathname } = useLocation();
  const { isEmpty } = useWishListFirestore();

  const getCategoriesRef = (ref) => {
    setRefs(ref);
  };
  useEffect(() => {
    getCategoriesRef(categoriesRef);
  }, []);

  return (
    <>
      <TopPanel receivedRefs={refs}>
        <Menu />
        <SearchBar />
        {pathname !== loginPage && <AuthLink />}
      </TopPanel>
      <BottomPanel ref={categoriesRef}>
        <Switch>
          <Route path={library}>
            <HorizontalMenu>
              <Genres />
            </HorizontalMenu>
          </Route>
          <Route exact path={deals}>
            <DealsLinkButton />
          </Route>
          <Route path={`${deals}${wishList}`}>
            {isEmpty ? null : <DealsLinkButton isOnTheWishList />}
          </Route>
        </Switch>
      </BottomPanel>
    </>
  );
};

export default Navigation;
