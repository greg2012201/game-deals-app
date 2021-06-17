import styled from 'styled-components'

export const StyledAchievementsListItem = styled.li`
  list-style: none;
  h4,
  p,
  img {
    margin-bottom: 8px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
    line-height: 1.3em;
  }
  img {
    max-width: 50px;
  }
`
