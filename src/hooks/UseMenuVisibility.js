import { useEffect, useState } from 'react'

export const useMenuVisibilityToggle = (element, target) => {
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    const isTarget = () => {
      setVisibility(target.current.getBoundingClientRect().bottom >= element.current.getBoundingClientRect().bottom + 5)
    }
    if (target && element) {
      isTarget()
      window.addEventListener('scroll', isTarget)
    }
  }, [target, element])
  return visibility
}
