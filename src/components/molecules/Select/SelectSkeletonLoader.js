import { theme } from 'assets/styles/theme'
import React from 'react'
import ContentLoader from 'react-content-loader'

const SelectSkeletonLoader = () => {
  return (
    <div>
      <ContentLoader height={35} width={105} {...theme.skeletonLoaderTheme}>
        <rect x="0" y="3" rx="7" ry="7" width="89" height="30" />
      </ContentLoader>
    </div>
  )
}

export default SelectSkeletonLoader
