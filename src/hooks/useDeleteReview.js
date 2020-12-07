import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
export const useDeleteReview = () => {
    const [mutate] = useMutation(DELETE_REVIEW);

    const deleteReview = async (id) => {
        const { data } = await mutate({
            variables: { id: id }
        });
        return data.deleteReview;
    };

    return [deleteReview];
};