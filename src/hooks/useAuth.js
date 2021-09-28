import { wishListApi } from 'features/WishListApi/WishListApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { actionTypes } from 'redux-firestore';

export const useAuth = () => {
  useFirebaseConnect();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const data = useSelector(({ firebase, firebase: { auth } }) => ({
    auth: auth,
    authError: firebase.authError,
    user: auth.uid,
    isEmpty: auth.isEmpty,
    isLoaded: auth.isLoaded,
  }));
  const resetUserData = () => {};
  const login = (credentials) => {
    return firebase.login(credentials);
  };
  const logout = () => {
    dispatch({ type: actionTypes.CLEAR_DATA, meta: { collection: 'userWishList' } });
    dispatch(wishListApi.util.resetApiState());
    firebase.logout();
    resetUserData();
  };
  return { login, logout, data };
};
