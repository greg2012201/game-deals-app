import { useEffect, useState } from 'react'

export const useScrollToTopWhenClickedLinkIsSameAsCurrentURL = (pathname) => {
  const [isClickedCurrentUrl, setClicked] = useState(false)
  const handleOnClick = (e) => {
    setClicked(e.target.getAttribute('href') === pathname)
  }

  useEffect(() => {
    if (!isClickedCurrentUrl) return
    window.scrollTo(0, 0)
  }, [isClickedCurrentUrl])
  return { handleOnClick }
}
