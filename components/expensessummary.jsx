
import { View, Text, StyleSheet } from "react-native";

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
        borderColor: '#ba371a',
        color: '#ffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '85%',
        padding: 7,
        borderRadius: 7
    },
    period: {
        color: '#c4614b',
        fontSize: 17,
        fontWeight: 'bold'
    },
    amount: {
        backgroundColor: '#ffff',
        padding: 6,
        fontWeight: 'bold',
        borderRadius: 4
    }
})