import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useMemo } from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { BlurView } from 'expo-blur';
import { hp } from '../helpers/common';
import { theme } from '../constants/Colors';
import { SectionView } from './filterView';


const FilterModal = ({ modalRef }) => {
    const snapPoints = useMemo(() => ['75%'], []);
    return (
        <BottomSheetModal
            ref={modalRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={CustomBackdrop}
        // onChange={handleSheetChanges}
        >
            <BottomSheetView style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.filterText}>Filters</Text>
                    {
                        Object.keys(sections).map((sectionName, index) => {
                            let sectionView = sections[sectionName];
                            return (
                                <View>
                                    <SectionView key={sectionName}
                                        title={sectionName}
                                        content={sectionView({})}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    )
}

const sections = {
    "order": (props) => <OrderView {...props} />,
    "orientation": (props) => <OrderView {...props} />,
    "type": (props) => <OrderView {...props} />,
    "colors": (props) => <OrderView {...props} />
}
const OrderView = () => {
    return (
        <View>
            <Text>Section View</Text>
        </View>
    )
}

const CustomBackdrop = ({ animatedIndex, style }) => {

    const containerStyle = [
        StyleSheet.absoluteFill,
        style,
        styles.overlay,
    ]
    return (
        <Animated.View style={containerStyle}>
            <BlurView
                style={StyleSheet.absoluteFill}
                tint='dark'
                intensity={25}
            />
        </Animated.View>
    )
}
const styles = StyleSheet.create({

    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        flex: 1,
        width: '100%',
        gap: 15,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    filterText: {
        fontSize: hp(4),
        fontWeight: theme.fontWeights.semibold,
        color: theme.Colors.neutral(0.8),
        marginBottom: 5
    }
})
export default FilterModal