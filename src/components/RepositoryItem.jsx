import React from 'react';
import { Image, View, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';
import * as Linking from 'expo-linking';
const parseThousand = (num) => {
    num /= 1000;
    let returnString = "";
    let afterDot = false;
    let i=0;
    let str = num.toString();
    
    while(!afterDot) {
        if(i < str.length) {
            if(str[i] != '.')
                returnString += str[i];
            else
                afterDot = true;
            i++;
        }
        else {
            afterDot = true;
        }
    }
    if(afterDot && i < str.length)
        returnString += '.' + str[i];

    return returnString + 'k';
};

const RepositoryItem = ({ item, showGithub }) => {
    
    const styles = StyleSheet.create({
        infoContainer: {
            padding: 15,
            textAlign: 'center'
        },
      });
    let width = Dimensions.get('window').width;
    let starCount = (item.stargazersCount > 1000) ? parseThousand(item.stargazersCount) : item.stargazersCount;
    let forksCount = (item.forksCount > 1000) ? parseThousand(item.forksCount) : item.forksCount;
    const toGithub = () => {
        Linking.openURL(item.url);
    };
    return (
        <View style={theme.cardStyle}>
            <View style={ { flexDirection: 'row' } }>
                <View style={ { padding: 15 } }>
                    <Image style={ { height: width * 0.075, width: width * 0.075 } } source={ { uri: item.ownerAvatarUrl } } />
                </View>
               <View style={{ justifyContent: 'center' }}>
                    <Text fontWeight='bold' fontSize='subheading' testID="repositoryItemTitle">{item.fullName}</Text>
                    <Text color='textSecondary'>{item.description}</Text>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text style={ { backgroundColor: theme.colors.primary, padding: 5, margin: 5, color: theme.colors.white }}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={ { flexDirection: 'row' } }>
                <View style={styles.infoContainer}>
                    <Text>{starCount}</Text>
                    <Text fontWeight='bold'>Stars</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>{forksCount}</Text>
                    <Text fontWeight='bold'>Forks</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>{item.reviewCount}</Text>
                    <Text fontWeight='bold'>Reviews</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>{item.ratingAverage}</Text>  
                    <Text fontWeight='bold'>Rating</Text>
                </View>
            </View> 
            {showGithub && 
                <View style={[{ backgroundColor: theme.colors.primary }, theme.formSpacing]}>
                    <TouchableWithoutFeedback testID="signInSubmit" onPress={toGithub}>
                    <Text style={ { color: theme.colors.white, textAlign: 'center' } }>Open in Github</Text>
                    </TouchableWithoutFeedback>
                </View>
            }         
        </View>
    );
};

export default RepositoryItem;