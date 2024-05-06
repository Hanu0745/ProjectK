
import { View } from "react-native";
import { useContext } from "react";

import DisplayExpenses from "../components/showExpenses/displayExpences";
import { ExpenceStorage } from "../Store/expancesstore";

const AllExpenses = () => {

    const expasedata = useContext(ExpenceStorage);
    // console.log(expasedata.expences);

    return(
        <View>
            <DisplayExpenses expenses={expasedata.expences} expenseperiod={"Total time period"}/>
        </View>
    )
}

export default AllExpenses;