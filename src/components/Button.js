import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const styles = {
    textStyle: {
        // font style
        fontSize: 16,
        fontWeight: '600',

        // padding style
        paddingTop: 10,
        paddingBottom: 10,

        //aligning style
        alignSelf: 'center',

        // text-color style
        color: '#007aff'
    },
    buttonStyle: {
        // filling style
        flex: 1,
        alignSelf: 'stretch',

        // background-color style
        backgroundColor: '#fff',

        // border style
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',

        // margin style
        marginLeft: 5,
        marginRight: 5
    }
};

const Button = ({text, onPress}) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}> Buy the album {text} </Text>
        </TouchableOpacity>
    );
};

export default Button;