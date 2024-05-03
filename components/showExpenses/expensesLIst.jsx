
import { View, FlatList, Text, StyleSheet, Pressable, RefreshControl } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";


const ExpenseList = ({ expenses }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    const navigation = useNavigation();
    const prinAlltheData = (data) => {

        const date = new Date(data.item.purchase_date);
        const year = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const daate = `${day}-${month}-${year}`;
        // console.log(daate);

        const pageNavigate = () => {
            navigation.navigate('Manageexpance', {expenceId: data.item.id});
        }

        return (
            <View >
                    <Pressable android_ripple={{color: '#4f4a4a'}} style={styles.innercontainer} onPress={() => pageNavigate()}>
                    <View style={styles.content}>
                        <Text style={{ color: 'orange' }}>Item: {data.item.disription}</Text>
                        <Text style={{ color: 'orange' }}>Date: {daate}</Text>
                    </View>
                    <Text style={styles.cost}>Cost: {data.item.amount.toFixed(2)}$</Text>
            </Pressable>
                </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={expenses}
                renderItem={prinAlltheData}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing}
                    onRefresh={onRefresh} />
                }
            />
        </View>
    )

}

export default ExpenseList;

const styles = StyleSheet.create({

    container: {
        width: '85%',
        marginTop: 20,
    },
    innercontainer: {
        // overflow: 'hidden',
        borderWidth: 3,
        borderRadius: 7,
        borderColor: '#ba371a',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7,
    },
    content: {

    },
    cost:{
        backgroundColor: '#d1a4a1',
        padding: 7,
        borderRadius: 4
    }
})