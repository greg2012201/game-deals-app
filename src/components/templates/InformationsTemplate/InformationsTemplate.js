import React from 'react'
import { useTheme } from 'styled-components'
import { StyledInformationsTemplate } from './InformationsTemplate.style'
import Loader from 'react-loader-spinner'

const InformationsTemplate = ({ children, isLoading }) => {
  const theme = useTheme()

  if (isLoading) {
    return (
      <StyledInformationsTemplate>
        <Loader className="loader" type="Oval" color={theme.colors.darkWhite} height={60} width={60} />
      </StyledInformationsTemplate>
    )
  } else {
    return <StyledInformationsTemplate>{children}</StyledInformationsTemplate>
  }
}

export default InformationsTemplate
