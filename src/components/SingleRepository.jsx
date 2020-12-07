import React from 'react';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useSingleRepository from '../hooks/useSingleRepository';
import { useParams } from 'react-router-native';

import { View, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
const ItemSeparator = () => <View style={styles.separator} />;
const SingleRepository = () => {
    const { id } = useParams();
    const { repository, loading, fetchMore } = useSingleRepository(id);
    const reviewList = repository ? repository.reviews.edges.map(edge => edge.node) : [];
    const onEndReach = () => {
        console.log('Fetch more called');
        fetchMore();
    };
    if(loading) {
        return(<View style={theme.cardStyle}><Text>Loading...</Text></View>);
    }
    else {
        return(
            <FlatList 
                data={reviewList}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => 
                    <ReviewItem item={item} showButton={false} />
                }
                ListHeaderComponent={() => <RepositoryItem item={repository} showGithub={true} />}
            />
        );
    }
    
};

export default SingleRepository;