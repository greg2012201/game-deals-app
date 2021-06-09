import { Paragraph } from 'components/atoms/Paragraph/Paragraph'
import styled from 'styled-components'

export const RequirementsWrapper = styled.div`
  margin-top: 20px;

  ${Paragraph} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  p {
    margin: 0;
  }
  button {
    margin-top: 10px;

    height: 22px;
  }
`
