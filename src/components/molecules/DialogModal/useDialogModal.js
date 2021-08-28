import { useState } from 'react';

export const useDialogModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterUserAnswerAction = ({ consent, action }) => {
    if (!consent) {
      return;
    } else {
      action();
    }
  };
  const handleOnClick = ({ hasConsent, action }) => {
    afterUserAnswerAction({ consent: hasConsent, action });
    closeModal();
  };
  return { modalIsOpen, openModal, handleOnClick, closeModal };
};
