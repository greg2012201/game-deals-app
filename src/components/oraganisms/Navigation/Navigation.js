import React, { useEffect, useState } from 'react'
import Genres from 'components/molecules/Categories/Genres'
import Menu from 'components/molecules/Menu/Menu'

const Navigation = () => {
  const categoriesRef = React.useRef()
  const [refs, setRefs] = useState('')

  const getCategoriesRef = (ref) => {
    setRefs(ref)
  }
  useEffect(() => {
    getCategoriesRef(categoriesRef)
  }, [])
  return (
    <>
      <Menu receivedRefs={refs} />
      <Genres ref={categoriesRef} />
    </>
  )
}

export default Navigation
