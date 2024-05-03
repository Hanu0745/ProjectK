

import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Icons = ({onpress, icc, size, color}) => {

    return(
        <Pressable onPress={onpress}>
            <View style={styles.iconcontainer}>
                <Text><Ionicons name={icc} size={size} color={color}/></Text>
            </View>
        </Pressable>
    )
}

export default Icons;

const styles = StyleSheet.create({
    iconcontainer: {
        padding: 7,
        margin: 10
    }
})