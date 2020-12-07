import { gql } from 'apollo-boost';
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS, REVIEW_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
query getRepositories($order: OrderDirection, $criteria: AllRepositoriesOrderBy, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderDirection: $order, orderBy: $criteria, searchKeyword: $searchKeyword, after: $after, first: $first) {
    edges {
      node {
        ...RepositoryBaseFields
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    }
  }
}

${REPOSITORY_BASE_FIELDS}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      ...UserBaseFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewBaseFields
          }
        }
      }
    }
  }
  ${REVIEW_BASE_FIELDS}
  ${USER_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
query getRepository($id: ID!, $after: String, $first: Int) {
  repository(id: $id) {
    ...RepositoryBaseFields
    reviews(after: $after, first: $first) {
      edges {
        node {
          ...ReviewBaseFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}

${REPOSITORY_BASE_FIELDS}
${REVIEW_BASE_FIELDS}
`;