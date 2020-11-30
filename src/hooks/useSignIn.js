import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
export const useSignIn = () => {
    const apolloClient = useApolloClient();
    const [mutate] = useMutation(SIGN_IN);
    const authStorage = useContext(AuthStorageContext);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password }}
        });
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        return data.authorize.accessToken;
    };

    return [signIn];
};