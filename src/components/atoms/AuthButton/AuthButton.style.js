import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.darkWhite};
  }
  @media (min-width: ${({ theme }) => theme.resolutions.xxs}) {
    margin-right: 20px;
  }
  @media (min-width: ${({ theme }) => theme.resolutions.m}) {
    margin-right: 45px;
  }
`;
export const Wrapper = styled.div`
  margin: 0 10px 0 auto;
  justify-self: flex-end;
  a,
  ${StyledButton} {
    font-family: Krub;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.l};
    cursor: pointer;
  }
`;
