

import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from "../globlstls/globalStyles";

const Icons = ({onpress, icc, size, color}) => {

    return(
        <Pressable style={({pressed}) => pressed && styles.press} onPress={onpress}>
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
    },
    press:{
        opacity: 0.7
    }
})