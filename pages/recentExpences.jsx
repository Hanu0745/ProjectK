
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useContext } from "react";

import DisplayExpenses from "../components/showExpenses/displayExpences";
import { ExpenceStorage } from "../Store/expancesstore";


const DataPage = () => {

    const expasedata = useContext(ExpenceStorage);
    const recentExpenses = expasedata.expences.filter((expense) => {
        const todayDate = new Date();
        const date7DaysBefore = new Date(todayDate.getFullYear(),todayDate.getMonth(), todayDate.getDate() - 7);
        return expense.purchase_date > date7DaysBefore;
    });

    return(
        <View style={styles.container}>
                <DisplayExpenses expenses={recentExpenses} expenseperiod={"Last 7 Days"} />
        </View>
    )
}

export default DataPage;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // marginLeft: 20
    }
})