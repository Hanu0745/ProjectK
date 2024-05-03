
import { createContext, useReducer } from "react";
import { dummy_data } from "../dumData/dumdata";


export const ExpenceStorage = createContext({
    expences: [],
    deleteExpense: (id) => {},
    updateExpense: (id, {disription, amount, date}) => {},
    addExpense: ({disription, amount, date}) => {}

});

const reduser = (state, action) => {

    switch (action.type){
        case 'ADD':
            const dummyid = new Date().toString + Math.random().toString();
            return [{...action.data, id:dummyid}, ...state];
        case 'UPDATE':
            const updatableExpandeIndex = state.findIndex(
                (expense) => expense.id === action.data.id
            );
            const updatableExpanse = state[updatableExpandeIndex]
            const updatedItem = {...updatableExpanse, ...action.data.dt};
            const updatedExpense = [...state];
            updatedExpense[updatableExpandeIndex] = updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter(item => item.id !== action.data);
        default:
            return state
    }
}


const ExpanceProvider = ({children}) => {

    const [doanAction, dispatch] = useReducer(reduser, dummy_data);

    function deleteExpense(id) {
        dispatch({type: 'DELETE', data: id});
    }

    function updateExpense(id, expasedata) {
        dispatch({type: 'UPDATE', data: {id: id, dt: expasedata}});
    }

    function addExpense(expasedata) {
        dispatch({type: 'ADD', data: expasedata});
    }



    const value = {
        expences: doanAction,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
        addExpense: addExpense
    }

    return(
        <ExpenceStorage.Provider value={value}>{children}</ExpenceStorage.Provider>
    )
}

export default ExpanceProvider;