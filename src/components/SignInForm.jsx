import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
const SignInForm = ({ onSubmit }) => {
    return (
        <View style={ { flexDirection: 'column' } }>
        <FormikTextInput testId="usernameInput" name='username' placeholder='username' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput testId="passwordInput" name='password' placeholder='password' secureTextEntry={true} style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <View style={[{ backgroundColor: theme.colors.primary }, theme.formSpacing]}>
          <TouchableWithoutFeedback testId="signInSubmit" onPress={onSubmit}>
            <Text style={ { color: theme.colors.white, textAlign: 'center' } }>Sign In</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
};

export default SignInForm;