import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import { useCreateReview } from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';
const validationSchema = yup.object().shape({
  repoOwner: yup
    .string()
    .required('Repository Owner is required'),
  repoName: yup
    .string()
    .required('Repository Name is required'),
  rating: yup
    .number()
    .required('Rating is required'),
  review: yup 
    .string()
});

const Review = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  const onSubmit = async (values) => {
    const newReview = {
      repositoryName: values.repoName, 
      ownerName: values.repoOwner,
      rating: parseInt(values.rating),
      
    };
    if(values.review.length != 0) {
      newReview.text = values.review;
    }
    console.log("New Review", newReview);
    try {
      const res = await createReview(newReview);
      history.push(`/repositories/${res.repositoryId}`);
    } catch(e) {
      console.log(e);
    }
  };
  const initialValues={
    repoOwner: '',
    repoName: '',
    rating: '',
    review: '',
  };

  return (
    <View style={theme.cardStyle}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;