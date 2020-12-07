import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
export const useCreateReview = () => {
    const [mutate] = useMutation(CREATE_REVIEW);

    const createReview = async (CreateReviewInput) => {
        const { data } = await mutate({
            variables: { review: CreateReviewInput}
        });      
        return data.createReview;
    };

    return [createReview];
};