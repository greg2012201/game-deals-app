import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

const TitleSkeletonLoader = () => {
  const theme = useTheme()
  return (
    <ContentLoader width="150px" height="35px" {...theme.skeletonLoaderTheme}>
      <rect x="0" y="0" rx="15" ry="15" width="100%" height="100%" />
    </ContentLoader>
  )
}

export default TitleSkeletonLoader
