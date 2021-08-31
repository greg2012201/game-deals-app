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
import { useWishList } from '../WishList/useWishList';

const { library, deals, wishList } = pathsList;
const Navigation = () => {
  const categoriesRef = useRef();
  const [refs, setRefs] = useState('');
  const { data: wishListData } = useWishList();
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
          <Route path={`${deals}${wishList}`}>{wishListData.isEmpty ? null : <DealsLinkButton isOnTheWishList />}</Route>
        </Switch>
      </BottomPanel>
    </>
  );
};

export default Navigation;
