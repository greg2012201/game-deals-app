import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

const GamesListSkeletonLoader = () => {
  const theme = useTheme()

  return (
    <ContentLoader height={360} width={360} {...theme.skeletonLoaderTheme}>
      <rect x="165" y="119" rx="0" ry="0" width="2" height="14" />
      <rect x="9" y="8" rx="0" ry="0" width="260" height="140" />
      <rect x="194" y="91" rx="0" ry="0" width="21" height="2" />
      <rect x="241" y="163" rx="4" ry="4" width="27" height="27" />
      <rect x="10" y="198" rx="0" ry="0" width="260" height="21" />
      <rect x="13" y="246" rx="0" ry="0" width="42" height="12" />
      <rect x="179" y="244" rx="0" ry="0" width="38" height="12" />
      <rect x="235" y="245" rx="0" ry="0" width="33" height="12" />
    </ContentLoader>
  )
}
export default GamesListSkeletonLoader
