// Import the necessary libraries
import React from 'react';
import {Text, View} from 'react-native';

// Styling
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',

        // aligning content inside view using FlexBox CSS
        justifyContent: 'center', // align content vertically
        alignItems: 'center', // align content horizontally

        height: 60,
        paddingTop: 15,

        // Adding shadow to bottom border
        shadowColor: '#000', 
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,

        // Positioning
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Create the header component
const Header = (prop) => {
    const {viewStyle,textStyle} = styles;
    return  (
        <View style={viewStyle}>
            <Text style={textStyle}>{prop.headerText}</Text>
        </View>
    );
};

// Make the component available to render
export default Header;