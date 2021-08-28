import styled from 'styled-components';

export const StyledButton = styled.button`
  align-self: flex-end;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 7px;
  cursor: pointer;
`;
