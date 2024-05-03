
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import DisplayExpenses from "../components/showExpenses/displayExpences";
import { ExpenceStorage } from "../Store/expancesstore";

const HomePage = () => {

    const expasedata = useContext(ExpenceStorage);
    // console.log(expasedata.expences);

    return(
        <View>
            <DisplayExpenses expenses={expasedata.expences} expenseperiod={"Total time period"}/>
        </View>
    )
}

export default HomePage;