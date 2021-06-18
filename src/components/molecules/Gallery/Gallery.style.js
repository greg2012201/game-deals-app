import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  justify-self: center;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 980px) {
    & {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 300px 120px 120px;
      width: 500px;

      img:first-of-type {
        grid-column: 1/3;
        grid-row: 1/2;
        width: 95%;
        height: 95%;
      }
    }
  }
`
export const ImgItem = styled.img`
  margin: 0;
  padding: 0;
  margin-right: 10px;
  width: 264px;
  height: 168px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (min-width: 980px) {
    display: ${(props) => (props['data-index'] >= 5 ? 'none' : 'block')};

    & {
      margin: 0;
      align-self: center;
      justify-self: center;
      width: 90%;
      height: 90%;
      cursor: pointer;
      box-shadow: none;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: 0.2s;
      }
    }
  }
`
