import React from 'react'
import ContentLoader from 'react-content-loader'
import { useWindowSize } from 'react-use'
import { useTheme } from 'styled-components'
const skeletonLoaderHeight = '100vh'
const GameDetailsSkeletonLoader = (props) => {
  const theme = useTheme()
  const { width } = useWindowSize()

  if (width >= 980) {
    return (
      <ContentLoader width={'90%'} height={'100vh'} viewBox="0 0 980 700" {...theme.skeletonLoaderTheme} {...props}>
        <rect x="10" y="20" rx="10" ry="10" width="279" height="36" />
        <rect x="29" y="73" rx="13" ry="13" width="456" height="285" />
        <rect x="520" y="115" rx="6" ry="6" width="320" height="15" />
        <rect x="520" y="144" rx="6" ry="6" width="400" height="15" />
        <rect x="520" y="174" rx="6" ry="6" width="300" height="15" />
        <rect x="520" y="239" rx="6" ry="6" width="456" height="15" />
        <rect x="520" y="205" rx="6" ry="6" width="380" height="15" />
        <rect x="520" y="275" rx="6" ry="6" width="250" height="15" />
        <rect x="29" y="376" rx="13" ry="13" width="216" height="119" />
        <rect x="520" y="73" rx="10" ry="10" width="100" height="23" />
        <rect x="268" y="376" rx="13" ry="13" width="216" height="119" />
        <rect x="29" y="515" rx="13" ry="13" width="216" height="119" />
        <rect x="268" y="515" rx="13" ry="13" width="216" height="119" />
      </ContentLoader>
    )
  } else if (width >= 600) {
    return (
      <ContentLoader width={'90%'} height={skeletonLoaderHeight} viewBox="0 0 600 600" {...theme.skeletonLoaderTheme} {...props}>
        <rect x="20" y="20" rx="10" ry="10" width="348" height="36" />
        <rect x="23" y="83" rx="13" ry="13" width="264" height="168" />
        <rect x="20" y="282" rx="5" ry="5" width="100" height="23" />
        <rect x="20" y="335" rx="6" ry="6" width="500" height="15" />
        <rect x="20" y="360" rx="6" ry="6" width="440" height="15" />
        <rect x="20" y="387" rx="6" ry="6" width="492" height="15" />
        <rect x="20" y="438" rx="6" ry="6" width="479" height="15" />
        <rect x="20" y="413" rx="6" ry="6" width="413" height="15" />
        <rect x="20" y="466" rx="6" ry="6" width="385" height="15" />
        <rect x="20" y="510" rx="8" ry="8" width="69" height="39" />
        <rect x="311" y="82" rx="13" ry="13" width="264" height="168" />
      </ContentLoader>
    )
  } else {
    return (
      <ContentLoader width={360} height={skeletonLoaderHeight} viewBox="0 0 360 600" {...theme.skeletonLoaderTheme} {...props}>
        <rect x="20" y="20" rx="10" ry="10" width="288" height="36" />
        <rect x="23" y="83" rx="13" ry="13" width="264" height="168" />
        <rect x="20" y="282" rx="5" ry="5" width="100" height="23" />
        <rect x="20" y="335" rx="6" ry="6" width="269" height="15" />
        <rect x="20" y="360" rx="6" ry="6" width="243" height="15" />
        <rect x="20" y="387" rx="6" ry="6" width="269" height="15" />
        <rect x="20" y="438" rx="6" ry="6" width="269" height="15" />
        <rect x="20" y="413" rx="6" ry="6" width="238" height="15" />
        <rect x="20" y="466" rx="6" ry="6" width="215" height="15" />
        <rect x="20" y="510" rx="8" ry="8" width="69" height="39" />
      </ContentLoader>
    )
  }
}

export default GameDetailsSkeletonLoader
