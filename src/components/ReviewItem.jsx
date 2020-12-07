import React from 'react';
import theme from '../theme';
import { View, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import { useHistory } from 'react-router-native';
const ReviewItem = ({ item, showButton, onDelete }) => {
    const width = Dimensions.get('window').width;
    //console.log(item.createdAt);
    //console.log(format(Date.parse(item.createdAt), 'dd,MM.yyyy'));
    const history = useHistory();

    const toRepository = () => {
        history.push(`/repositories/${item.repositoryId}`);
    };

    const deleteReview = () => {
        if(onDelete) {
            Alert.alert(
                'Are you sure you want to do this?',
                '',
                [
                    {
                        text: 'Yes',
                        onPress: () => onDelete(item.id),
                        style: 'destructive'
                    },
                    {
                        text: 'No',
                        style: 'cancel',
                        onPress: () => {}
                    }
                ]
            );
        }
    };

    return (
        <View style={theme.cardStyle}>
            <View style={ { flexDirection: 'row' } }>
                <View style={ { padding: 15 } }>
                    <View style={{ height: width * 0.05, width: width * 0.05, borderColor: theme.colors.primary, borderWidth: 1, borderRadius: width * 0.05 * 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text color='primary'>{item.rating}</Text>
                    </View>
                </View>
               <View style={{ justifyContent: 'center' }}>
                    <Text fontWeight='bold' fontSize='subheading'>{item.user.username}</Text>
                    <Text color='textSecondary'>{format(Date.parse(item.createdAt), 'dd,MM.yyyy')}</Text>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text>
                            {item.text}
                        </Text>
                    </View>
                </View>
            </View> 
            {showButton &&
            <View style={[{ flexDirection: 'row'}]}>
                <View style={{ width: '49%', backgroundColor: theme.colors.primary, margin: '0.5%' }}>
                    <TouchableWithoutFeedback onPress={toRepository}>
                        <Text style={ { color: theme.colors.white, textAlign: 'center', padding: 10 } }>View Repository</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ width: '49%', backgroundColor: 'red', margin: '0.5%', padding: 10 }}>
                    <TouchableWithoutFeedback onPress={deleteReview}>
                        <Text style={ { color: theme.colors.white, textAlign: 'center' } }>Delete Review</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            }    
        </View>
    );
};

export default ReviewItem;