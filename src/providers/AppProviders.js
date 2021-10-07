import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { rrfProps } from 'features/firebase/firebase';
import { GenresDataProvider } from 'hooks/useGenres';
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <GenresDataProvider>
          <Router>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </Router>
        </GenresDataProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default AppProviders;
