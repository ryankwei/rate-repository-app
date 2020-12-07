import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from '../../src/components/SignInForm';
describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const validationSchema = yup.object().shape({
        username: yup
          .string()
          .required('Username is required'),
        password: yup
          .string()
          .required('password is required')
      });
          
      const initialValues={
        username: '',
        password: ''
      };
      const onSubmit = jest.fn();
      const { getByTestId } = render(<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>);
      fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
      fireEvent.changeText(getByTestId('passwordInput'), 'password');
      fireEvent.press(getByTestId('signInSubmit'));
      // await act(async () => {
      //   await fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
      //   await fireEvent.changeText(getByTestId('passwordInput'), 'password');
      //   await fireEvent.press(getByTestId('signInSubmit'));
      // });
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});