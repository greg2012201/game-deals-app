import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  justify-self: ${({ isWishList }) => (isWishList ? 'flex-start' : 'flex-end')};
  align-items: center;
  width: 150px;
  margin: 10px 20px 0;
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

  &::${({ isWishList }) => (isWishList ? 'before' : 'after')} {
    display: block;
    content: '\\2192';
    transform: ${({ isWishList }) => (isWishList ? 'rotate(180deg)' : 'rotate(0)')};
    font-size: 20px;
    line-height: 100%;
    margin: 0 5px;
    margin-bottom: ${({ isWishList }) => (isWishList ? '-6px' : '6px')};
  }

  @media (min-width: 509px) {
    margin-top: 0;
    align-self: center;
  }
`;
