import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

const AchievementsListItemSkeletonLoader = () => {
  const theme = useTheme()
  return (
    <ContentLoader width="150px" height="140px" {...theme.skeletonLoaderTheme}>
      <rect x="0" y="0" rx="10" ry="10" width="80" height="13" />
      <rect x="0" y="85" rx="5" ry="5" width="82" height="8" />
      <rect x="0" y="101" rx="5" ry="5" width="129" height="8" />
      <rect x="0" y="116" rx="5" ry="5" width="90" height="8" />
      <rect x="5" y="25" rx="0" ry="0" width="50" height="50" />
    </ContentLoader>
  )
}

export default AchievementsListItemSkeletonLoader
