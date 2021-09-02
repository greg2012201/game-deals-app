import { useState } from 'react';

export const useDialogModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterUserAnswerAction = ({ consent, actions }) => {
    if (!consent) {
      return;
    } else {
      actions.forEach((action) => action());
    }
  };
  const handleOnClick = ({ hasConsent, actions }) => {
    afterUserAnswerAction({ consent: hasConsent, actions });
    closeModal();
  };
  return { modalIsOpen, openModal, handleOnClick, closeModal };
};
