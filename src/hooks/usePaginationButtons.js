import { useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-use'
export const usePaginationButtons = (ref) => {
  const [isPagination, setPagination] = useState('')
  const location = useLocation()
  const handleOnSize = useCallback(() => {
    if (ref.current.scrollWidth === ref.current.clientWidth) {
      setPagination(false)
    } else setPagination(true)
  }, [ref, setPagination])

  useEffect(() => {
    handleOnSize()
    window.addEventListener('resize', handleOnSize)

    return () => {
      window.removeEventListener('resize', handleOnSize)
    }
  }, [handleOnSize, isPagination, location])

  return isPagination
}
