import React from 'react'
import { useTheme } from 'styled-components'
import { StyledInformationsTemplate } from './InformationsTemplate.style'
import Loader from 'react-loader-spinner'
import { states } from 'utils/state/states'

const InformationsTemplate = ({ children, compareState }) => {
  const theme = useTheme()

  if (!compareState(states.hasError)) {
    return (
      <StyledInformationsTemplate>
        {compareState(states.isLoading) ? <Loader className="loader" type="Oval" color={theme.colors.darkWhite} height={60} width={60} /> : children}
      </StyledInformationsTemplate>
    )
  }
}

export default InformationsTemplate
