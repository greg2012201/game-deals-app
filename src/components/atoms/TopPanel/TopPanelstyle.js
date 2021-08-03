import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index: ${({ isVisible }) => (isVisible ? '1' : '0')};
  bottom: calc(100vh - 56px);
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: 0.3s;
`
