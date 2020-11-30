import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...
import SignInForm from '../../src/components/SignInForm';
describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);
      fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
      fireEvent.changeText(getByTestId('passwordInput', 'password'));
      fireEvent.press(getByTestId('signInSubmit'));

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