import { Paragraph } from 'components/atoms/Paragraph/Paragraph'
import styled from 'styled-components'

export const RequirementsWrapper = styled.div`
  margin-top: 20px;
  width: 360px;
  align-self: flex-start;
  ${Paragraph} {
    font-size: ${({ theme }) => theme.fontSize.s};
    @media (min-width: 980px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  p {
    margin: 0;
  }
  button {
    margin-top: 10px;

    height: 22px;
  }

  /* @media (max-width: 980px) {
    align-self: center;
  } */
`
