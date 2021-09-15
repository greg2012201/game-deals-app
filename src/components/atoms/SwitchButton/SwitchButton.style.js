import styled from 'styled-components';

export const StyledAddButton = styled.button`
  display: flex;
  position: relative;
  box-sizing: border-box;
  grid-column: 2;
  grid-row: 5;
  justify-self: end;
  padding: 0;
  margin: 0;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, isRemove }) => (isRemove ? theme.colors.red : theme.colors.green)};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Krub;
  font-weight: 700;
  color: ${({ theme, isRemove }) => (isRemove ? theme.colors.red : theme.colors.darkerGreen)};
  cursor: pointer;
  &::after,
  &::before {
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 25px;
    height: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: 0.2s;
  }
  &::before {
    transform: ${({ isRemove }) =>
      isRemove ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(90deg)'};
  }
  &::after {
    transform: ${({ isRemove }) =>
      isRemove ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%) rotate(0deg)'};
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
`;
