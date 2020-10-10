import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
          <Link to="/" style={ { padding: 10 } }>
            <Text style={ { color: theme.colors.white }}>Repositories</Text>
          </Link>
          <Link to="/SignIn" style={ { padding: 10 } }>
            <Text style={ { color: theme.colors.white }}>Sign In</Text>
          </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;