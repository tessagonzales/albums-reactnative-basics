import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Main = () => {
    return (
        <View>
            <Text style={styles.textStyling}>Main Component</Text>
        </View>
    )
};

export default Main;

const styles = StyleSheet.create({
    textStyling: {
        color:'#bed0ff',
        fontSize: 30
    },

    container: {
        padding: 30,
        backgroundColor: 'white'
    }
})