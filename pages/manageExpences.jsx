
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useLayoutEffect, useContext } from "react";

import { dummy_data } from "../dumData/dumdata";
import Icons from "../ui/icons";
import { GlobalStyles } from "../globlstls/globalStyles";
import Buttons from "../ui/buttons";
import { ExpenceStorage } from "../Store/expancesstore";

const ManageExpences = ({ route, navigation }) => {

    const expasedata = useContext(ExpenceStorage);

    const expenceid = route.params?.expenceId;
    const isEditing = !!expenceid;
    console.log(isEditing);

    const expaseFilter = expasedata.expences.filter((expense) => expense.id === expenceid);
    console.log(expaseFilter);

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
        }else{
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

    const Cancels = () => {
        navigation.goBack();
        console.log('cancele');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/backk.jpg')} style={styles.imgcontainer}>
                <View style={styles.btncontainer}>
                    <Buttons onpress={UpdateOrAdd}>{isEditing ? 'Update' : 'Add'}</Buttons>
                    <Buttons onpress={Cancels}>Cancele</Buttons>
                </View>
                <View style={styles.trashcontainer}>
                    {isEditing && <Icons icc='trash' color={'red'} size={37} onpress={DeleteExpance}></Icons>}
                </View>
            </ImageBackground>
        </View>
    )
}

export default ManageExpences;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    imgcontainer: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        padding: 10,

    },
    trashcontainer: {
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primary500,
        width: '80%',
        alignItems: 'center',
        margin: 7
    },
    btncontainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})