
import { View, ImageBackground, StyleSheet } from "react-native";

import ExpenseList from "./expensesLIst";
import ExpensesSummary from "../expensessummary";
// import { dummy_data } from "../../dumData/dumdata";

const imgg = { uri: "https://w.forfun.com/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg" };

const DisplayExpenses = ({ expenses, expenseperiod }) => {


    return (
        <View style={styles.container}>
            <ImageBackground source={imgg} style={{ width: '100%', height: '100%' }}>
                <View style={styles.content}>
                    <ExpensesSummary expenses={expenses} expenseperiod={expenseperiod} />
                    <ExpenseList expenses={expenses} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default DisplayExpenses;

const styles = StyleSheet.create({

    content:{
        alignItems: 'center',
        margin: 16
    }
})