import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={ { flexDirection: 'column' } }>
        <FormikTextInput name='repoOwner' placeholder='repository owner (github username)' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput name='repoName' placeholder='repository name' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput name='rating' placeholder='rating' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } />
        <FormikTextInput name='review' placeholder='review' style={ { borderColor: theme.colors.grey, borderWidth: 1 } } multiline={true} />
        <View style={[{ backgroundColor: theme.colors.primary }, theme.formSpacing]}>
          <TouchableWithoutFeedback onPress={onSubmit}>
            <Text style={ { color: theme.colors.white, textAlign: 'center' } }>Review</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
};

export default ReviewForm;