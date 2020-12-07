import { gql } from 'apollo-boost';

import { USER_BASE_FIELDS, REVIEW_BASE_FIELDS } from './fragments';

export const SIGN_IN = gql`
mutation signIn($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
        accessToken
        user {
            ...UserBaseFields
        }
    }
}

${USER_BASE_FIELDS}
`;

export const CREATE_REVIEW = gql`
mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
        ...ReviewBaseFields
    }
}

${REVIEW_BASE_FIELDS}
`;

export const CREATE_USER = gql`
mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
        ...UserBaseFields
    }
}
${USER_BASE_FIELDS}
`;

export const DELETE_REVIEW = gql`
mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
}
`;