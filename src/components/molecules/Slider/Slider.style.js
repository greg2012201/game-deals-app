import styled from 'styled-components';
import ReactModal from 'react-modal';
import RoundButton from 'components/atoms/RoundButton/RoundButton';
export const Wrapper = styled(ReactModal)`
  .swiper-button {
    visibility: hidden;
  }
  .swiper-button-next,
  .swiper-button-prev {
    visibility: hidden;
    &::after {
      color: ${({ theme }) => theme.colors.white};
    }
    @media (min-width: 768px) {
      & {
        visibility: visible;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.white};
  }
  .swiper-container {
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    width: 100%;
    max-height: 100vh;

    img {
      width: 100%;
      max-height: 100vh;
    }
  }
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
export const Button = styled(RoundButton)`
  bottom: 10%;
  right: 50%;
  transform: translateX(50%);
  @media (min-width: ${({ theme }) => theme.resolutions.xs}) {
    & {
      bottom: 90vh;
      right: 50px;
    }
  }
`;
