import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 15px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  height: calc(100vh - 56px);
  top: 100%;
  left: 0;
  right: 0;

  transition: 0.2;
`
