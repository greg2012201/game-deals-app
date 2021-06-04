import { useState, useEffect, useCallback } from 'react'

export const useTextContainer = (view, paragraph) => {
  const [isOpen, setOpen] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState(false)
  const [initialWidth, setInitialWidth] = useState(window.innerWidth)
  const heightComparison = useCallback(() => {
    if (paragraph.current.getBoundingClientRect().height < view.current.getBoundingClientRect().height) {
      setButtonVisible(false)
    } else setButtonVisible(true)
  }, [paragraph, view])
  const handleOnResize = useCallback(() => {
    const currentWidth = window.innerWidth
    if (currentWidth !== initialWidth) {
      setOpen(false)
      setInitialWidth(currentWidth)
      heightComparison()
    }
  }, [heightComparison, initialWidth])
  useEffect(() => {
    heightComparison()

    window.addEventListener('resize', handleOnResize)

    return () => {
      setOpen(false)
      setButtonVisible(false)
      window.removeEventListener('resize', handleOnResize)
    }
  }, [paragraph, view, heightComparison, handleOnResize])

  return { isOpen, isButtonVisible, setOpen }
}
