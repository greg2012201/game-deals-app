import React from 'react'
import ContentLoader from 'react-content-loader'
import { useWindowSize } from 'react-use'
import { useTheme } from 'styled-components'

const ArticleContainerSkeletonLoader = () => {
  const { width: windowWidth } = useWindowSize()
  const theme = useTheme()

  if (windowWidth > 980) {
    return (
      <ContentLoader width="600px" height="600px" {...theme.skeletonLoaderTheme}>
        <rect x="0" y="20" rx="10" ry="10" width="80" height="28" />
        <rect x="0" y="71" rx="5" ry="5" width="421" height="12" />
        <rect x="0" y="96" rx="5" ry="5" width="500" height="12" />
        <rect x="0" y="121" rx="5" ry="5" width="450" height="12" />
        <rect x="0" y="146" rx="5" ry="5" width="505" height="12" />
        <rect x="0" y="174" rx="5" ry="5" width="450" height="12" />
        <rect x="0" y="200" rx="5" ry="5" width="500" height="12" />
        <rect x="0" y="229" rx="5" ry="5" width="421" height="12" />
      </ContentLoader>
    )
  } else {
    return (
      <ContentLoader width="320px" height="350px" {...theme.skeletonLoaderTheme}>
        <rect x="0" y="20" rx="10" ry="10" width="80" height="28" />
        <rect x="0" y="71" rx="5" ry="5" width="221" height="12" />
        <rect x="0" y="96" rx="5" ry="5" width="300" height="12" />
        <rect x="0" y="121" rx="5" ry="5" width="250" height="12" />
        <rect x="0" y="146" rx="5" ry="5" width="305" height="12" />
        <rect x="0" y="174" rx="5" ry="5" width="250" height="12" />
        <rect x="0" y="200" rx="5" ry="5" width="300" height="12" />
        <rect x="0" y="229" rx="5" ry="5" width="221" height="12" />
        <rect x="0" y="274" rx="5" ry="5" width="77" height="32" />
      </ContentLoader>
    )
  }
}

export default ArticleContainerSkeletonLoader
