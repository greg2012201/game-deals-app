import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 0;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: 0.2;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
`;
