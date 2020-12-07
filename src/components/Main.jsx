import React from 'react';
import { Route, Switch } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';
import Review from './Review';
import SignUp from './SignUp';
import ReviewList from './ReviewList';
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
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/repositories/:id">
          <SingleRepository />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/reviews">
          <ReviewList />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;