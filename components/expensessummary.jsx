
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../globlstls/globalStyles";

const ExpensesSummary = ({expenses, expenseperiod}) => {

    const totalSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return(
        <View style={styles.container}>
            <Text style={styles.period}>{expenseperiod}</Text>
            <Text style={styles.amount}>${totalSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({

    container: {
        borderWidth: 3,
        borderColor: GlobalStyles.colors.primary200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '85%',
        padding: 7,
        borderRadius: 7
    },
    period: {
        color: GlobalStyles.colors.primary50,
        fontSize: 17,
        fontWeight: 'bold'
    },
    amount: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        fontWeight: 'bold',
        borderRadius: 4
    }
})