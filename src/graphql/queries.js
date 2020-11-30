import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        node {
          id 
          fullName 
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
      pageInfo {
        totalCount
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;