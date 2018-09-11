import React from 'react';
import {Text, View, Image, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
    //Text-related styling
    textViewContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    // thumbnail-related styling
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 10,
        marginRight: 10
    },
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },

    // Album image-related styling
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
}

const AlbumDetail = ({album}) => {
    const {
        textViewContainer, 
        thumbnailImageStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    const {
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{uri: thumbnail_image}}
                        style={thumbnailImageStyle}
                    />
                </View>
                <View style={textViewContainer}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source = {{uri: image}}
                    style = {imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button
                    text={title}
                    onPress={() => Linking.openURL(url)}
                />
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;