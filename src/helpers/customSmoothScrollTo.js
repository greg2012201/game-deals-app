import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
export const customSmoothScrollTo = (top = 0, left = 0) => {
  return window.scrollTo({
    top: top,
    left: left,
    behavior: 'smooth',
  })
}
