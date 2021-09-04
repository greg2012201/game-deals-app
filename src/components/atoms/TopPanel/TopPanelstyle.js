import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index: 1;
  bottom: calc(100vh - 56px);
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: ${({ isVisible }) => (isVisible ? 'transform 0.1s  ease, opacity 0.2s 0.1s  ease ' : 'opacity 0.3s ease, transform 0.1s 0.3s ease')};
`;
