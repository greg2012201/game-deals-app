import styled from 'styled-components'

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
  background-color: transparent;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;

  cursor: pointer;
  transition: 0.2;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`
