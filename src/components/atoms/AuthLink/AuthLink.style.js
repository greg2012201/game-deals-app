import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  margin: 0 10px 0 auto;
  justify-self: flex-end;
  font-family: Krub;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.l};

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
