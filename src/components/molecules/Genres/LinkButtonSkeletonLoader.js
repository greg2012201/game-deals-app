import { theme } from 'assets/styles/theme'
import React from 'react'
import ContentLoader from 'react-content-loader'

const LinkButtonSkeletonLoader = (props) => {
  return (
    <div>
      <ContentLoader height={35} width={70} {...theme.skeletonLoaderTheme} {...props}>
        <rect x="0" y="3" rx="7" ry="7" width="60" height="32" />
      </ContentLoader>
    </div>
  )
}

export default LinkButtonSkeletonLoader
