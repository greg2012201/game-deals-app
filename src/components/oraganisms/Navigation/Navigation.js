import React, { useEffect, useState, useRef } from 'react'
import Genres from 'components/molecules/Genres/Genres'
import Menu from 'components/molecules/Menu/Menu'
import Panel from 'components/atoms/Panel/Panel'

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
      <Panel receivedRefs={refs}>
        <Menu />
      </Panel>
      <Genres ref={categoriesRef} />
    </>
  )
}

export default Navigation
