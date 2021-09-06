import DeleteBinButton from 'components/atoms/DeleteBinButton/DeleteBinButton';
import { useDeleteBinButtonAnimation } from 'components/atoms/DeleteBinButton/useDeleteBinButtonAnimation';
import ItemsCounter from 'components/atoms/ItemsCounter/ItemsCounter';
import Title from 'components/atoms/Title/Title';
import DialogModal from 'components/molecules/DialogModal/DialogModal';
import { useDialogModal } from 'components/molecules/DialogModal/useDialogModal';
import WishListEmptyPage from 'components/molecules/WishListEmptyPage/WishListEmptyPage';
import debounce from 'lodash.debounce';
import React, { useMemo } from 'react';
import DealsList from '../DealsList.js/DealsList';
import { useWishList } from './useWishList';
import { ItemsManagementWrapper } from './WishList.style';
const WishList = () => {
  const { data, removeAllFromStore, findItemsInWishListFirestore, handleOnClick: handleOnWishListClick } = useWishList();
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
          <ItemsManagementWrapper>
            <ItemsCounter numberOfItems={data.list.length} />
            <DeleteBinButton onClick={openModal} hasAnimationStarted={hasAnimationStarted} />
          </ItemsManagementWrapper>

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

      <DealsList isWishList data={data} findItemsInWishListFirestore={findItemsInWishListFirestore} handleOnClick={handleOnWishListClick} />
    </>
  );
};
export default WishList;
