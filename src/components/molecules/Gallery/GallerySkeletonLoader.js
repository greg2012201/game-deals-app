import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'
import { useWindowSize } from 'react-use'

const GallerySkeletonLoader = ({ index }) => {
  const { width: windowWidth } = useWindowSize()
  const theme = useTheme()
  if (windowWidth >= 980) {
    return (
      <ContentLoader width={index === 0 ? '456px' : '216px'} height={index === 0 ? '285px' : '108px'} {...theme.skeletonLoaderTheme}>
        <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
      </ContentLoader>
    )
  } else {
    return (
      <ContentLoader width="284px" height="168px" {...theme.skeletonLoaderTheme}>
        <rect x="0" y="0" rx="10" ry="10" width="98%" height="100%" />
      </ContentLoader>
    )
  }
}

export default GallerySkeletonLoader
