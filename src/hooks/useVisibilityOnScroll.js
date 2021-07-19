import { useEffect, useState, useCallback } from 'react'

export const useVisibilityOnScroll = (visibilityBorder = 0) => {
  const [isVisible, setVisibility] = useState(false)
  const handleScroll = useCallback(() => {
    if (window.scrollY > visibilityBorder) {
      return setVisibility(true)
    } else {
      return setVisibility(false)
    }
  }, [visibilityBorder])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return isVisible
}
