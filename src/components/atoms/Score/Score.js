import styled from 'styled-components'

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 -15px;
  grid-row: 2;
  grid-column: 2;
  width: 25px;
  height: 25px;
  justify-self: end;
  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  cursor: default;
  ${({ value, theme }) => {
    if (value >= 80) {
      return `border-color : ${theme.colors.green}; color:${theme.colors.green};`
    } else if (value >= 50) {
      return `border-color : ${theme.colors.orange}; color:${theme.colors.orange};`
    }
  }}
`
