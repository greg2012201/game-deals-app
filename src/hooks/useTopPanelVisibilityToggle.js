import { useEffect, useState } from 'react'

export const useTopPanelVisibilityToggle = (changingElement, targetElement) => {
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    const isTarget = () => {
      setVisibility(changingElement.current.getBoundingClientRect().bottom <= targetElement.current.getBoundingClientRect().bottom - 5)
    }
    if (changingElement && targetElement) {
      isTarget()
      window.addEventListener('scroll', isTarget)
    }
    return () => {
      window.removeEventListener('scroll', isTarget)
    }
  }, [changingElement, targetElement])
  return visibility
}
