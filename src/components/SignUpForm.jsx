import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={ { flexDirection: 'column' } }>
        <FormikTextInput name='username' placeholder='username' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput name='password' placeholder='password' secureTextEntry={true} style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput name='passwordConfirm' placeholder='passwordConfirm' secureTextEntry={true} style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <View style={[{ backgroundColor: theme.colors.primary }, theme.formSpacing]}>
          <TouchableWithoutFeedback testID="signInSubmit" onPress={onSubmit}>
            <Text style={ { color: theme.colors.white, textAlign: 'center' } }>Sign Up</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
};

export default SignInForm;