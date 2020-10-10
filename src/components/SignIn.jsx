import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('password is required')
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
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