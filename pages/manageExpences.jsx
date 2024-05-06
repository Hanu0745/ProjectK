
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { useLayoutEffect, useContext } from "react";

import Icons from "../ui/icons";
import { GlobalStyles } from "../globlstls/globalStyles";
import Buttons from "../ui/buttons";
import { ExpenceStorage } from "../Store/expancesstore";
import axios from "axios";

import ExpenseForm from "./forms/expenseForm";

const ManageExpences = ({ route, navigation }) => {

    const expasedata = useContext(ExpenceStorage);

    const expenceid = route.params?.expenceId;
    const isEditing = !!expenceid;
    console.log(isEditing);

    const expaseFilter = expasedata.expences.filter((expense) => expense.id === expenceid);
    // console.log(expaseFilter);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Editing' : 'Adding',
        })
    }, [navigation, isEditing]);

    const DeleteExpance = () => {

        if (expaseFilter) {
            expasedata.deleteExpense(expenceid);
            navigation.goBack();
            console.log('deleteitem');
        } else {
            console.log('no data avilable');
        }
    }

    const UpdateOrAdd = () => {
        if (isEditing) {
            expasedata.updateExpense(
                expenceid,
                {
                    disription: 'A Chair',
                    amount: 77.49,
                    purchase_date: new Date("2024-02-23")
                }
            )
            console.log('updates');
        } else {
            expasedata.addExpense(
                {
                    disription: 'A Chair!!!',
                    amount: 70.07,
                    purchase_date: new Date("2024-05-03")
                }
            )
            console.log('edited');
        }
        navigation.goBack();
    };

    const Cancels = async () => {
        // navigation.goBack();
        await axios.get('https://18.61.216.20:5010/api/last-five-slider')
            .then((res) => {
                console.log('jskdfjhd');
                console.log(res);
            }).catch((er) => {
                console.log(er);
            })
        console.log('cancele');
    }

    return (
        <View style={styles.container}>
                <ExpenseForm />
                <View style={styles.btncontainer}>
                    <Buttons onpress={UpdateOrAdd}>{isEditing ? 'Update' : 'Add'}</Buttons>
                    <Buttons onpress={Cancels}>Cancele</Buttons>
                </View>
                <View style={styles.trashcontainer}>
                    {isEditing && <Icons icc='trash' color={GlobalStyles.colors.primary100} size={37} onpress={DeleteExpance}></Icons>}
                </View>
                {/* <ImageBackground style={styles.backimg} source={require('../assets/images/withrin.jpg')}><Text style={{fontSize: 30, marginBottom: 50}}>😘</Text></ImageBackground> */}
        </View>
    )
}

export default ManageExpences;

const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary700
    },
    backimg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trashcontainer: {
        borderTopWidth: 4,
        borderColor: GlobalStyles.colors.primary500,
        width: '80%',
        alignItems: 'center',
        margin: 7,
        borderTopColor: GlobalStyles.colors.primary500
    },
    btncontainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})