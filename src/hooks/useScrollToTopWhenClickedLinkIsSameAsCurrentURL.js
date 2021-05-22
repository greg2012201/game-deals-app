import { useEffect, useState } from 'react'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
export const useScrollToTopWhenClickedLinkIsSameAsCurrentURL = (pathname) => {
  const [isClickedCurrentUrl, setClicked] = useState(false)
  const handleOnClick = (e) => {
    setClicked(e.target.getAttribute('href') === pathname)
  }

  useEffect(() => {
    if (!isClickedCurrentUrl) return
    customSmoothScrollTo(0, 0)
  }, [isClickedCurrentUrl])
  return { handleOnClick }
}
