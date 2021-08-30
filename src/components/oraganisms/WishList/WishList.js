import DeleteBinButton from 'components/atoms/DeleteBinButton/DeleteBinButton';
import { useDeleteBinButtonAnimation } from 'components/atoms/DeleteBinButton/useDeleteBinButtonAnimation';
import Title from 'components/atoms/Title/Title';
import DialogModal from 'components/molecules/DialogModal/DialogModal';
import { useDialogModal } from 'components/molecules/DialogModal/useDialogModal';
import WishListEmptyPage from 'components/molecules/WishListEmptyPage/WishListEmptyPage';
import debounce from 'lodash.debounce';
import React, { useMemo } from 'react';
import DealsList from '../DealsList.js/DealsList';
import { useWishList } from './useWishList';
const WishList = () => {
  const { data, removeAllFromStore } = useWishList();
  const { openModal, modalIsOpen, closeModal, handleOnClick } = useDialogModal();
  const { hasAnimationStarted, startAnimation, delay } = useDeleteBinButtonAnimation();
  const debouncedRemove = useMemo(() => {
    return debounce(removeAllFromStore, delay);
  }, [removeAllFromStore, delay]);
  return (
    <>
      <Title titleType="h1">WishList</Title>
      {!data.isEmpty ? (
        <>
          <DeleteBinButton onClick={openModal} hasAnimationStarted={hasAnimationStarted} />
          <DialogModal
            title={'Delete items'}
            handleOnClick={handleOnClick}
            closeModal={closeModal}
            isOpen={modalIsOpen}
            handleOnConsent={[debouncedRemove, startAnimation]}
          >
            Are you sure you want to remove all items from WishList ?
          </DialogModal>
        </>
      ) : !data.isLoading ? (
        <WishListEmptyPage />
      ) : null}

      <DealsList isWishList data={data} />
    </>
  );
};
export default WishList;
