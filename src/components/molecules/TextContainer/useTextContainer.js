import { getDimensions } from 'helpers/getDimensions'
import { useState, useEffect, useCallback } from 'react'

export const useTextContainer = (view, paragraph) => {
  const [isOpen, setOpen] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState(false)
  const [initialWidth, setInitialWidth] = useState(window.innerWidth)

  const heightComparison = useCallback(() => {
    const { height: paragraphHeight, margin: paragraphMargin, padding: paragraphPadding, lineHeight: paragraphLineHeight } = getDimensions(
      paragraph.current
    )
    const { height: viewHeight } = getDimensions(view.current)
    if (paragraphHeight + paragraphMargin - paragraphPadding < viewHeight + paragraphLineHeight || paragraphHeight === 0) {
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
