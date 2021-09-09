import styled from 'styled-components';
const buttonWidth = '170px';
const buttonMarginLeft = '20px';
export const Wrapper = styled.div`
  margin-left: ${({ isOnTheWishList }) =>
    !isOnTheWishList ? `calc(100% - ${buttonWidth} - ${buttonMarginLeft})` : '20px'};

  a {
    text-decoration: none;
  }
`;
export const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  width: ${buttonWidth};
  padding: 0 5px;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  height: 32px;
  border-radius: 7px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
  &::${({ isOnTheWishList }) => (isOnTheWishList ? 'before' : 'after')} {
    display: block;
    content: '\\2192';
    transform: ${({ isOnTheWishList }) => (isOnTheWishList ? 'rotate(180deg)' : 'rotate(0)')};
    font-size: 20px;
    line-height: 100%;
    margin: 0 5px;
    margin-bottom: ${({ isOnTheWishList }) => (isOnTheWishList ? '-6px' : '6px')};
  }

  @media (min-width: 509px) {
    margin-top: 0;
    align-self: center;
  }
`;
