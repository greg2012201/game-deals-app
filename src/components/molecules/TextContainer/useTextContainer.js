import { useState, useEffect } from 'react'

export const useTextContainer = (viewHeight, paragraph) => {
  const [isOpen, setOpen] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState('')

  useEffect(() => {
    const handleOnResize = () => {
      if (paragraph.current.getBoundingClientRect().height >= viewHeight) {
        setButtonVisible(true)
      } else setButtonVisible(false)
    }
    handleOnResize()
    window.addEventListener('resize', handleOnResize)
    return () => {
      setOpen(false)
      window.removeEventListener('resize', handleOnResize)
    }
  }, [paragraph, viewHeight])
  return { isOpen, isButtonVisible, setOpen }
}
