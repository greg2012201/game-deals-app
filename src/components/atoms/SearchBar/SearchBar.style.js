import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  input {
    height: 40.28px;
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
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.grey};
  }

  label {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
  }
`
