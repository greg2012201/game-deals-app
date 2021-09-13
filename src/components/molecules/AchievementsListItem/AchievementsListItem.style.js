import styled from 'styled-components';

export const StyledAchievementsListItem = styled.li`
  list-style: none;
  min-height: 130px;
  h4,
  p,
  img {
    margin-bottom: 8px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    line-height: 1.3em;

    @media (min-width: ${({ theme }) => theme.resolutions.l}) {
      & {
        font-size: ${({ theme }) => theme.fontSize.m};
        h4 {
          font-size: ${({ theme }) => theme.fontSize.l};
        }
      }
    }
  }
  img {
    max-width: 50px;
  }
`;
