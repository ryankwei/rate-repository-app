import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useSingleRepository = (id) => {
  const variables = { id: id, first: 3 };
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, { 
    fetchPolicy: 'cache-and-network',    
    variables: variables
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if(!canFetchMore) {
      //console.log('did not fetch more');
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            }
          },
        };
        console.log("LOOK HERE");
        console.log(previousResult);
        console.log(fetchMoreResult);
        console.log(nextResult);
        return nextResult;
      },
    });
  };
  return { repository: data && data.repository ? data.repository : null, loading: loading, fetchMore: handleFetchMore, ...result };
};

export default useSingleRepository;