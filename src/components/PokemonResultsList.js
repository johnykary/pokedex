import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const ResultsList = ({results, title, navigation}) => {
    if(!results.length){
        return null;
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}




export default withNavigation(ResultsList);