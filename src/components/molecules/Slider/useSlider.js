import { useEffect, useState } from 'react'

export const useSlider = () => {
  const [isOpen, setOpen] = useState(false)
  const [index, setIndex] = useState(false)

  const handleSliderOpen = (e) => {
    setIndex(parseInt(e.target.getAttribute('index')))
    setOpen(true)
  }
  const handleSliderClose = () => setOpen(false)
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'visible')
  }, [isOpen])

  return { isOpen, index, handleSliderClose, handleSliderOpen }
}
