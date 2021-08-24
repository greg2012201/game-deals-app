import React, { useEffect, useState, useRef } from 'react'
import Genres from 'components/molecules/Genres/Genres'
import Menu from 'components/molecules/Menu/Menu'
import TopPanel from 'components/atoms/TopPanel/TopPanel'
import SearchBar from 'components/oraganisms/SearchBar/SearchBar'
import { Link, Route, Switch } from 'react-router-dom'
import { pathsList } from 'routes'
import BottomPanel from 'components/molecules/BottomPanel/BottomPanel'
import DealsSelect from 'components/molecules/DealsSelect/DealsSelect'
import HorizontalMenu from 'components/molecules/HorizontalMenu/HorizontalMenu'
import { StyledLinkButton } from './Navigation.style'

const { library, deals, wishList } = pathsList
const Navigation = () => {
  const categoriesRef = useRef()
  const [refs, setRefs] = useState('')
  const getCategoriesRef = (ref) => {
    setRefs(ref)
  }
  useEffect(() => {
    getCategoriesRef(categoriesRef)
  }, [])

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
            <DealsSelect />
            <Link style={{ textDecoration: 'none' }} to={`${deals}${wishList}`}>
              <StyledLinkButton>Go to whishlist </StyledLinkButton>
            </Link>
          </Route>
          <Route path={`${deals}${wishList}`}>
            <Link style={{ textDecoration: 'none' }} to={`${deals}`}>
              <StyledLinkButton isWishList>Go to DealsList </StyledLinkButton>
            </Link>
          </Route>
        </Switch>
      </BottomPanel>
    </>
  )
}

export default Navigation
