import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

export default CardSection;

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}