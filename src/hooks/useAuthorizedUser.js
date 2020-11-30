import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = () => {
  const { data, error, loading } = useQuery(AUTHORIZED_USER);
  console.log(error);
  return { user: data ? data.authorizedUser : null, loading };
};

export default useAuthorizedUser;