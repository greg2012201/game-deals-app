import { useState, useEffect, useCallback } from 'react'

export const useTextContainer = (view, paragraph) => {
  const [isOpen, setOpen] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState(false)
  const heightComparison = useCallback(() => {
    if (paragraph.current.getBoundingClientRect().height < view.current.getBoundingClientRect().height) {
      setButtonVisible(false)
    } else setButtonVisible(true)
  }, [paragraph, view])
  const handleOnResize = useCallback(() => {
    setOpen(false)
    heightComparison()
  }, [heightComparison])
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
