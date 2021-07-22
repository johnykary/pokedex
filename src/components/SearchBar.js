import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search"
                style ={styles.iconStyle}/>
            <TextInput
                placeholder="Search Pokemon"
                autoCapitalize = "none"
            />
        </View>
    )
}

const styles =StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#E1E1E1',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom:5
    },

    inputStyle:{
        flex: 1,
        fontSize: 18
    },

    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }


});

export default SearchBar;