import RoundButton from 'components/atoms/RoundButton/RoundButton'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 20px 0;
  width: 195px;
  height: 25px;
  padding: 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 100;

  visibility:${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  input {
    height: 33px;
    border-radius: 0px 7px 7px 0px;
    border: none;
    font-family: Krub;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: center;
    width: 95%;
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.black} inset;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  label {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
  }

  @media (min-width: 980px) {
    & {
      width: 300px;
    }
  }
 
`
export const HintWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0;
  padding: ${({ isVisible }) => (isVisible ? '20px' : '0')};
  top: 100%;
  right: 0;
  width: 330px;
  max-height: 360px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow-y: scroll;
  z-index: 99;
  border-radius: 7px;

  a {
    text-decoration: none;
  }
`
export const Hint = styled.li`
  display: flex;
  align-items: center;
  width: 287px;
  height: 66px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  list-style: none;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  h4 {
    margin-left: 10px;
  }
  img {
    width: 74px;
    height: 44px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`
export const StyledLoader = styled(Loader)`
  align-self: center;
`
export const StyledResetRoundButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
`
