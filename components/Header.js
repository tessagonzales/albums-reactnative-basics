import React from 'react';
import { Text, View } from 'react-native'

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ headerText }</Text>
        </View>
    )
};

export default Header;

const styles = {
    viewStyle: {
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 30
    }
}