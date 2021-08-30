import styled from 'styled-components';
import { Paragraph } from '../Paragraph/Paragraph';

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;
