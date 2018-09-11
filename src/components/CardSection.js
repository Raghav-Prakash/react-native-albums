import React from 'react';
import {View} from 'react-native';

const styles = {
    containerStyle: {
        // border styling
        borderBottomWidth: 1,
        borderColor: '#ddd',
        
        // padding styling
        padding: 5,

        // flex styling
        justifyContent: 'flex-start',
        flexDirection: 'row',

        // background color to have the shadow style in Card in effect
        backgroundColor: '#fff',

        // positioning styling
        position: 'relative'
    }
};

const CardSection = (props) => {
    const {containerStyle} = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

export default CardSection;