import { useEffect, useState } from 'react'

export const useReturnButtonVisibility = () => {
  const [isVisible, setVisibility] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      return setVisibility(true)
    } else {
      return setVisibility(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return isVisible
}
