import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import { useDeleteReview } from '../hooks/useDeleteReview';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = () => {
  const [deleteReview] = useDeleteReview();
  const { user, refetch } = useAuthorizedUser(true);
  const reviewNodes = (user && user.reviews)
  ? user.reviews.edges.map(edge => edge.node)
  : [];
  const onDelete = async (id) => {
    try {
      await deleteReview(id);
      refetch();
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>
        <ReviewItem item={item} showButton={true} onDelete={onDelete} />
      }
    />
  );
};

export default ReviewList;