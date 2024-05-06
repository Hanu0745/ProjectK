

import { View, Text, StyleSheet, Label, TextInput } from "react-native";
import { GlobalStyles } from "../../globlstls/globalStyles";


const Inputs = ({label, expenseconfig}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput {...expenseconfig} style={styles.input} />
        </View>
    )
}

export default Inputs;

const styles = StyleSheet.create({

    container: {
        width: '90%',
        padding: 4,
        marginVertical: 4
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 3,
        paddingLeft: 9,
        height: 33,
        fontWeight: '600',
    },
    label:{
        fontWeight: 'bold',
        fontSize: 17,
        color: GlobalStyles.colors.primary500
    }
})