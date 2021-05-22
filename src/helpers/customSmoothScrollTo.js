import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
export const customSmoothScrollTo = (top, left) => {
  return window.scrollTo({
    top: top,
    left: left,
    behavior: 'smooth',
  })
}
