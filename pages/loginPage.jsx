
import { View, Text, StyleSheet, TextInput } from "react-native";


const LoginPage = () => {

    return(
        <View style={styles.container}>
            <View style={styles.logos}>
                <Text>Logos</Text>
            </View>

            <View style={styles.logininputs}>
                 <TextInput
                    placeholder="User Name"
                    keyboardType="numeric"
                 />
            </View>
        </View>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {

    },
    logos: {
        backgroundColor: '#7bf274',
    },
    logininputs: {
        backgroundColor: '#2f80eb',
    }
})