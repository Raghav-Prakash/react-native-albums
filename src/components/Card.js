import React from 'react';
import {View} from 'react-native';

const styles = {
    containerStyle: {
        // border styling
        borderColor: '#ddd',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderRadius: 2,

        // shadow styling
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        // background-color to eliminate shadow-rendering warnings
        backgroundColor: '#fff',

        // margin styling
        marginLeft: 5,
        marginRight: 5, 
        marginTop: 10,

        // positioning styling
        elevation: 1
    }
};

const Card = (props) => {
    const {containerStyle} = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

export default Card;