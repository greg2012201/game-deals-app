import { useState, useCallback, useEffect } from 'react'
export const usePaginationButtons = (ref) => {
  const [isPagination, setPagination] = useState('')
  const handleOnResize = useCallback(() => {
    if (ref.current.scrollWidth === ref.current.clientWidth) {
      setPagination(false)
    } else setPagination(true)
  }, [ref, setPagination])
  useEffect(() => {
    window.addEventListener('resize', handleOnResize)

    return () => window.removeEventListener('resize', handleOnResize)
  }, [handleOnResize, isPagination])
  return isPagination
}
