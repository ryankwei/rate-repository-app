import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';


export const useCreateAccount = () => {
    const [mutate] = useMutation(CREATE_USER);

    const createAccount = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { user: { username, password }}
        });
        return data.createUser;
    };

    return [createAccount];
};