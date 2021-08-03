import React, { useEffect, useState, useRef } from 'react'
import Genres from 'components/molecules/Genres/Genres'
import Menu from 'components/molecules/Menu/Menu'
import TopPanel from 'components/atoms/TopPanel/TopPanel'
import SearchBar from 'components/oraganisms/SearchBar/SearchBar'
import { Route } from 'react-router-dom'
import { pathsList } from 'routes'
import BottomPanel from 'components/molecules/BottomPanel/BottomPanel'
const { library } = pathsList
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
        <Route path={`${library}`}>
          <Genres />
        </Route>
      </BottomPanel>
    </>
  )
}

export default Navigation
