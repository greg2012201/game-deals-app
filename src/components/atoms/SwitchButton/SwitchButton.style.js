import styled from 'styled-components';

export const StyledAddButton = styled.button`
  box-sizing: border-box;
  grid-column: 2;
  grid-row: 5;
  justify-self: end;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 105px;
  border: none;
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Krub;
  font-weight: 700;
  color: ${({ theme, isRemove }) => (isRemove ? theme.colors.red : theme.colors.darkerGreen)};
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
`;
