import { View, Text, FlatList, StyleSheet, Pressable, Animated } from 'react-native'
import React from 'react'
import { data } from '../constants/data'
import { theme } from '../constants/Colors'
import { wp, hp } from '../helpers/common';
import { FadeInRight } from 'react-native-reanimated';


const Categories = ({ activeCategory, handleChangeCategory }) => {
    return (
        <FlatList
            horizontal
            contentContainerStyle={styles.flatlistContainer}
            showsHorizontalScrollIndicator={false}
            data={data.categories}
            keyExtractor={item => item}
            renderItem={({ item, index }) => (
                <CategoryItem
                    isActive={activeCategory == item}
                    handleChangeCategory={handleChangeCategory}
                    title={item}
                    index={index}
                />
            )}
        />
    )
}
const CategoryItem = ({ title, index, isActive, handleChangeCategory }) => {
    let color = isActive ? theme.Colors.white : theme.Colors.neutral(0.8)
    let backgroundColor = isActive ? theme.Colors.neutral(0.8) : theme.Colors.white
    return (
        <Animated.View entering={FadeInRight.delay(index * 200).duration(1000).springify().damping(14)}>
            <Pressable onPress={() => handleChangeCategory(isActive ? null : title)} style={[styles.category, { backgroundColor }]}>
                <Text style={[styles.title, { color }]}>{title}</Text>
            </Pressable>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    flatlistContainer: {
        paddingHorizontal: 4,
        gap: 8
    },
    category: {
        padding: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: theme.Colors.grayBG,
        borderRadius: theme.radius.lg,
        borderCurve: 'continuous'
    },
    title: {
        fontSize: hp(1.8),
        fontWeight: theme.fontWeights.medium
    }
})

export default Categories