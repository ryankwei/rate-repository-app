import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  console.log(error);
  return { repositories: data ? data.repositories : data, loading };
};

export default useRepositories;