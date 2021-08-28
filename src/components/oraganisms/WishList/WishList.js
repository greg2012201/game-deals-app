import DeleteBinButton from 'components/atoms/DeleteBinButton/DeleteBinButton';
import Title from 'components/atoms/Title/Title';
import DialogModal from 'components/molecules/DialogModal/DialogModal';
import { useDialogModal } from 'components/molecules/DialogModal/useDialogModal';
import React from 'react';
import DealsList from '../DealsList.js/DealsList';
import { useWishList } from './useWishList';
const WishList = () => {
  const { data, removeAllFromStore, isItemSwitching } = useWishList();
  const { openModal, modalIsOpen, closeModal, handleOnClick } = useDialogModal();
  return (
    <>
      <Title titleType="h1">WishList</Title>

      <DeleteBinButton onClick={openModal} isVisible={true} isLoading={isItemSwitching} />
      <DialogModal
        title={'Delete items'}
        handleOnClick={handleOnClick}
        closeModal={closeModal}
        isOpen={modalIsOpen}
        handleOnConsent={removeAllFromStore}
      >
        Are you sure you want to remove all items from WishList ?
      </DialogModal>

      <DealsList isWishList data={data} />
    </>
  );
};
export default WishList;
