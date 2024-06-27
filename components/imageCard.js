import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { getImageSize, wp } from '../helpers/common';
import { theme } from '../constants/Colors';

const ImageCard = ({ item, index, column }) => {
    const isLastInRow = () => {
        return (index) % column === 0
    }

    const getImageHeight = () => {
        let { imageHeight: height, imageWidth: width } = item
        return { height: getImageSize(height, width) }
    }
    return (
        <Pressable style={[styles.imageWrapper,!isLastInRow() && styles.spacing]}>
            <Image
                style={[styles.image, getImageHeight]}
                source={item?.webformatURL}
                transition={100}
            />
            {/* <Image style={styles.image} source={{ uri:  }} /> */}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    },
    imageWrapper: {
        backgroundColor: theme.Colors.grayBG,
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
        overflow: 'hidden',
        marginBottom: wp(2)
    },
    spacing: {
        marginRight: wp(2),

    }
})

export default ImageCard