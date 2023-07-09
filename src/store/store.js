import { configureStore } from "@reduxjs/toolkit";
import showModalReducer from '../slider/modalSlice';
import toDoTaskReducer from '../slider/addTaskSlice'


export const Store = configureStore({
    reducer : {
        showModal : showModalReducer,
        toDoTask : toDoTaskReducer
    }
})