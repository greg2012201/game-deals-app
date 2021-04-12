import React, { useEffect, useRef, useState } from 'react'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import { Wrapper } from './Menu.style'

export const Menu = ({ receivedRefs }) => {
  const [visibility, setVisibility] = useState(true)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const isTarget = () => {
      setVisibility(receivedRefs.current.getBoundingClientRect().bottom >= wrapperRef.current.getBoundingClientRect().bottom + 5)
    }
    if (receivedRefs) {
      isTarget()
      window.addEventListener('scroll', isTarget)
    }
  }, [receivedRefs])
  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton />
    </Wrapper>
  )
}
export default Menu
