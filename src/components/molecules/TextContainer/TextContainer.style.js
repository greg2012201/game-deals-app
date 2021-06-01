import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  line-height: 20px;
  padding: 10px;
  overflow: hidden;
`
export const ReadMoreButton = styled.button`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  bottom: 0;
  left: 10px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: ${({ theme }) => theme.colors.black};
`
export const StyledP = styled.p`
  max-height: ${({ isOpen, viewHeight }) => (isOpen ? 'auto' : `${viewHeight}px`)};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  text-align: justify;
`
