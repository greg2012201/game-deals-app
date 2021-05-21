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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
