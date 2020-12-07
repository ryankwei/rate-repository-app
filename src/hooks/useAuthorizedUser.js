import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = (includeReviews) => {
  const variables = (includeReviews) ? { includeReviews: includeReviews } : {};
  const { data, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });
  console.log(error);
  return { user: data ? data.authorizedUser : null, loading, refetch };
};

export default useAuthorizedUser;