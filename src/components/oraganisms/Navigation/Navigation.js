import React, { useEffect, useState } from 'react'
import Categories from '../../molecules/Categories/Categories'
import Menu from '../../molecules/Menu/Menu'

const Navigation = (props) => {
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
      <Categories ref={categoriesRef} />
    </>
  )
}

export default Navigation
