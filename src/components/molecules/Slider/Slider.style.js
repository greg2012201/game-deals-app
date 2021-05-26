import styled from 'styled-components'
import ReactModal from 'react-modal'
export const Wrapper = styled(ReactModal)`
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
    opacity: 1;
    width: 100%;
    width: 100%;
    max-height: 90vh;
    img {
      width: 100%;
    }
  }
  background-color: transparent;
  &:focus {
    outline: none;
  }
`
