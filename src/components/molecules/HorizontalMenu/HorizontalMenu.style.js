import styled from 'styled-components';
import { Triangle } from 'components/Triangle/Triangle';

export const PaginationButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 26px;
  top: 50%;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  transform: translateY(-50%);
  ${({ right }) => (right ? ' right:5px; border-radius:  0 5px 5px 0 ;' : ' left:5px; ')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    ${Triangle}::after {
      border-top-color: ${({ theme }) => theme.colors.violet};
    }
  }
`;
export const ButtonsWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  position: absolute;
  top: 50%;
  left: 45px;
  right: 45px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;

  button {
    margin: 0 2.5px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    &:nth-last-of-type(1) {
      margin-right: 0px;
    }
  }
  overflow-x: scroll;
`;
