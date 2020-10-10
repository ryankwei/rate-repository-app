import React from 'react';
import { Route, Switch } from 'react-router-native';

import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.dark
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/">
          <RepositoryList />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;