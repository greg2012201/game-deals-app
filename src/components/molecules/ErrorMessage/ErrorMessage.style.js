import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 230px;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;

  transform: translateX(-50%);
`
export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 6px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-family: Krub;
  font-size: 80px;
  letter-spacing: 5px;
`

export const Message = styled.p`
  margin-top: 25px;
  text-align: center;
  line-height: 1.5em;
`
export const LinkButton = styled(Link)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  line-height: 2em;
  border: 2px solid ${({ theme }) => theme.colors.white};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.violet};
    border-color: ${({ theme }) => theme.colors.violet};
  }
`
