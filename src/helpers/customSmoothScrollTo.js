import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
export const customSmoothScrollTo = (option, top, left) => {
  if (option === 'to') {
    return window.scrollTo({
      top: top,
      left: left,
      behavior: 'smooth',
    })
  }
}
