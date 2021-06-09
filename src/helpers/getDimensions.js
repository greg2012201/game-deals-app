export const getDimensions = (element) => {
  return {
    height: element.getBoundingClientRect().height,
    margin: parseInt(getComputedStyle(element).margin),
    padding: parseInt(getComputedStyle(element).padding),
    lineHeight: parseInt(getComputedStyle(element).lineHeight),
  }
}
