import styled from 'styled-components';

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;

  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  cursor: default;
  font-family: Lato;
  background-color: transparent;

  ${({ value, theme }) => {
    if (value >= 80) {
      return `border-color : ${theme.colors.green}; color:${theme.colors.green};`;
    } else if (value >= 50) {
      return `border-color : ${theme.colors.orange}; color:${theme.colors.orange};`;
    }
  }}
`;
