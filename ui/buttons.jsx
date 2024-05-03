
import { View, Text, Pressable, StyleSheet } from "react-native"
import { GlobalStyles } from "../globlstls/globalStyles"


const Buttons = ({children, onpress}) => {

    return(
        <View >
            <Pressable onPress={onpress} style={({pressed}) => pressed && styles.presses}>
                <Text style={styles.btnn}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Buttons;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    presses: {
        opacity: 0.7
    },
    btnn:{
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 7,
        margin: 9,
        fontWeight: 'bold',
        borderRadius: 7
    }
})