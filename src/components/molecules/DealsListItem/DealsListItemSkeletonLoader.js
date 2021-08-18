import React from 'react'
import ContentLoader from 'react-content-loader'
import { useWindowSize } from 'react-use'
import { useTheme } from 'styled-components'

const DealsListItemSkeletonLoader = () => {
  const theme = useTheme()
  const { width } = useWindowSize()
  if (width >= 800) {
    return (
      <ContentLoader height={110} width={780} {...theme.skeletonLoaderTheme}>
        <rect x="10" y="6" rx="10" ry="10" width="760" height="100" />
      </ContentLoader>
    )
  } else if (width >= 660) {
    return (
      <ContentLoader height={110} width={620} {...theme.skeletonLoaderTheme}>
        <rect x="10" y="6" rx="10" ry="10" width="600" height="100" />
      </ContentLoader>
    )
  } else {
    return (
      <ContentLoader height={200} width={320} {...theme.skeletonLoaderTheme}>
        <rect x="10" y="7" rx="10" ry="10" width="310" height="190" />
      </ContentLoader>
    )
  }
}
export default DealsListItemSkeletonLoader
