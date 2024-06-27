import { StyleSheet, Text, View } from "react-native"
import { hp } from "../helpers/common"
import { theme } from "../constants/Colors"



export const SectionView = ({title, content}) => {
    return (
        <View style={styles.SectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View>
                {content}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    SectionContainer:{
        gap: 8
    },
    sectionTitle:{
        fontSize: hp(2.4),
        fontWeight: theme.fontWeights.medium,
        color: theme.Colors.neutral(0.8)
    }
})
