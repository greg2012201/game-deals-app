import styled from 'styled-components';

export const StyledModal = styled.div`
  padding: 20px;
  position: absolute;
  border-radius: 7px;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledOverlay = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: ${({ theme }) => theme.colors.semiTransparentBlack};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;
export const StyledButton = styled.button`
  margin: 0 0 0 16px;
  font-family: Lato;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, hasConsent }) => (hasConsent ? theme.colors.semiTransparentRed : 'transparent')};
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 7px;

  &:hover {
    background-color: ${({ theme, hasConsent }) => (hasConsent ? theme.colors.red : theme.colors.green)};
  }

  cursor: pointer;
`;
