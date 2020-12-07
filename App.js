import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import theme from './src/theme';
const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary
  }
}

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient} >
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider theme={paperTheme}>
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
