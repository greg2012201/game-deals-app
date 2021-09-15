import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { pathsList } from 'routes';
import { useDispatch } from 'react-redux';
import { checkHasErrors } from 'features/errorSlice/errorsSlice';

export const useErrorPage = (isError, errorMessage = '') => {
  const { errorPage } = pathsList;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkHasErrors({ isError, errorMessage }));
    if (isError) {
      return history.push(`${errorPage}`);
    }
  }, [errorPage, history, isError, dispatch, errorMessage]);
};
