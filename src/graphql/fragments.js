import { gql } from 'apollo-boost';

export const REPOSITORY_BASE_FIELDS = gql`
  fragment RepositoryBaseFields on Repository {
    id
    name
    ownerName
    fullName
    stargazersCount
    forksCount
    url
    ownerAvatarUrl
    description
    language
    createdAt
    ratingAverage
    reviewCount
  }
`;

export const USER_BASE_FIELDS = gql`
  fragment UserBaseFields on User {
    id
    username
    createdAt
  }
`;

export const REVIEW_BASE_FIELDS = gql`
  fragment ReviewBaseFields on Review {
    id
    user {
      username
    }
    repositoryId
    rating
    createdAt
    text
  }
`;