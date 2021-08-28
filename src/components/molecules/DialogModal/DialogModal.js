import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Title from 'components/atoms/Title/Title';
import React from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { StyledModal, StyledOverlay, StyledButton, ButtonWrapper } from './DialogModal.style';

const userChoices = [
  { string: 'No', consent: false },
  { string: 'Yes', consent: true },
];
const DialogModal = ({ children, title, handleOnConsent, closeModal, handleOnClick, isOpen }) => {
  Modal.setAppElement('#app');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <StyledModal {...props}>{children}</StyledModal>}
      overlayElement={(props, contentElement) => <StyledOverlay {...props}>{contentElement}</StyledOverlay>}
    >
      <Title titleType="h2">{title}</Title>
      <Paragraph>{children}</Paragraph>
      <ButtonWrapper>
        {userChoices.map(({ string, consent }) => (
          <StyledButton hasConsent={consent} onClick={() => handleOnClick({ hasConsent: consent, action: handleOnConsent })}>
            {string}
          </StyledButton>
        ))}
      </ButtonWrapper>
    </ReactModal>
  );
};

export default DialogModal;
