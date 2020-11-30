import React from 'react';
import { useHistory } from 'react-router-native';
import { View } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push("/");
    } catch(e) {
      console.log(e);
    }
  };

  const initialValues={
    username: '',
    password: ''
  };

  return (
    <View style={theme.cardStyle}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;