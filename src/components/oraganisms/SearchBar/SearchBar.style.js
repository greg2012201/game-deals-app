import { Input } from 'components/atoms/Input/Input';
import RoundButton from 'components/atoms/RoundButton/RoundButton';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 20px 0;
  width: 130px;
  height: 25px;
  padding: 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 100;
  justify-self: flex-start;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  ${Input} {
    border-radius: 0px 7px 7px 0px;
    width: 95%;
  }

  label {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
  }

  @media (min-width: ${({ theme }) => theme.resolutions.xs}) {
    & {
      width: 300px;
    }
  }
`;
export const HintWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0;
  padding: ${({ isVisible }) => (isVisible ? '20px' : '0')};
  visibility: ${({ isVisible, isEmpty }) => (isVisible && !isEmpty ? 'visible' : 'hidden')};
  top: 100%;
  right: 0;
  min-width: 330px;
  max-height: 360px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow-y: scroll;
  z-index: 99;
  border-radius: 7px;

  a {
    text-decoration: none;
  }
`;
export const Hint = styled.li`
  display: flex;
  align-items: center;
  width: 287px;
  min-height: 80px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  list-style: none;
  border-radius: 7px;
  box-shadow: ${({ theme, isHighlited }) =>
    isHighlited ? `${theme.colors.violet} 0px 0px 0px 3px;` : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
  transition: 0.2s;
  h4 {
    margin-left: 10px;
  }
  img {
    width: 74px;
    height: 44px;
  }
`;
export const StyledLoader = styled(Loader)`
  align-self: center;
`;
export const StyledResetRoundButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
`;
