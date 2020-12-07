import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import { useCreateAccount } from '../hooks/useCreateAccount';
import SignIn from './SignIn';
import { useSignIn } from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords do not match')
});

const SignUp = () => {
   const [createAccount] = useCreateAccount();
   const [signIn] = useSignIn();
   const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await createAccount({ username, password });
      await SignIn({ username, password });
      history.push("/");
    } catch(e) {
      console.log(e);
    }
  };

  const initialValues={
    username: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <View style={theme.cardStyle}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit}) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;