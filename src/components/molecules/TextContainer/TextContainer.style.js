import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  line-height: 20px;
  overflow: hidden;
  button {
    margin-top: 20px;
  }
`

export const ViewWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen, viewHeight }) => (isOpen ? 'auto' : `${viewHeight}px`)};
`
