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
  }
  img {
    max-width: 50px;
  }
`
export const StyledWrapper = styled.div``
