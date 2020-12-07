import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    paddingBottom: 15,
    paddingLeft: 15,
    // ...
    backgroundColor: theme.colors.dark
  },
  // ...
});

const AppBar = () => {
  // return (
  // <View style={styles.container}>
  //   <TouchableWithoutFeedback>
  //     <Text style={ {color: 'white' } }>
  //     Repositories</Text>
  //   </TouchableWithoutFeedback>
  // </View>);
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const signOut = async (e) => {
    e.preventDefault();
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  const authorizedUser = useAuthorizedUser();
  console.log(authorizedUser);
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
          <Link to="/" style={ { padding: 10 } }>
            <Text style={ { color: theme.colors.white }}>Repositories</Text>
          </Link>
          <Link to="/review" style={ { padding: 10 } }>
            <Text style={ { color: theme.colors.white }}>Create a review</Text>
          </Link>          
          {authorizedUser.user == null && 
            <Link to="/SignIn" style={ { padding: 10 } }>
              <Text style={ { color: theme.colors.white } }>Sign In</Text>
            </Link>
          }
          {authorizedUser.user == null &&  
            <Link to="/SignUp" style={ { padding: 10 } }>
              <Text style={ { color: theme.colors.white } }>Sign Up</Text>
            </Link>
          }
          {
            authorizedUser.user != null &&
            <Link to="/reviews" style={{ padding: 10 }}>
              <Text style={{ color: theme.colors.white }}>My reviews</Text>
            </Link>
          }
          {authorizedUser.user != null && 
          <View style={ { padding: 10 } }>
            <TouchableWithoutFeedback onPress={signOut}>
                <Text style={ { color: theme.colors.white }}>Sign Out</Text>
            </TouchableWithoutFeedback>
          </View>
          }
      </ScrollView>
    </View>
  );
};

export default AppBar;