import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
export const horizontalMenuScroll = (direction, elementToScroll, distance) => {
  const directionToCompare = 'right'
  if (direction === directionToCompare) {
    elementToScroll.current.scrollBy({ top: 0, left: distance, behavior: 'smooth' })
  } else {
    elementToScroll.current.scrollBy({ top: 0, left: -distance, behavior: 'smooth' })
  }
}
