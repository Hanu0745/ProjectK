
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import Inputs from "./input";
import { GlobalStyles } from "../../globlstls/globalStyles";
import axios from "axios";

const ExpenseForm = () => {

    const [expanceData, setExpanceData] = useState({
        amount: '',
        purchase_date: '',
        disription: ''
    })

    const ChangeText = (identifier, event) => {
        setExpanceData((prevdata) => {
            return {
                ...prevdata,
                [identifier]: event
            }
        })
        console.log('jgfh');
        console.log(expanceData);
    }

    const dumdata = {
        amount: 255,
        date: '2024-05-06',
        discription: 'First Item'
    }

    const changeDate = () => {
        axios.post('http://192.168.11.14:5000/adddata', dumdata)
        .then((res) => {
            console.log('post data');
            console.log(res.data);
        }).catch((er) => console.log(er));
    }

    return (
        <View style={styles.container}>
            <Inputs label={'Date'} expenseconfig={{
                placeholder: 'date',
                onChange: ChangeText.bind(this, 'purchase_date'),
                maxLength: 10
            }}
            />
            <Inputs label={'Description'} expenseconfig={{
                placeholder: "discription",
                onChange: ChangeText.bind(this, 'discription'),
                maxLength: 20,
                multiline: true
            }} />
            <Inputs label={'Amount'} expenseconfig={{
                placeholder: 'amount',
                keyboardType: 'numeric',
                onChange: ChangeText.bind(this, 'Amount'),
            }} />
            <Button title="click" onPress={changeDate} />
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({

    container: {
        width: '90%',
        padding: 15,
        margin: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors.primary100
    }
})