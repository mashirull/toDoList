'use client'
import { createSlice } from "@reduxjs/toolkit";

//Getting data from localStorage
const getLocalStorage = ()=> {
    if(typeof window !== "undefined"){
        // JSON.parse(localStorage.getItem('taskList'))
        if(!Array.isArray(JSON.parse(localStorage.getItem('taskList')))){
            return []
        } else{
            return  JSON.parse(localStorage.getItem('taskList')) 
        }
    }else {
        return []
    }
      

}



// typeof window !== "undefined" ? window.JSON.parse(localStorage.getItem('taskList')) : [] ,

const initialState = {
    toDoList :  getLocalStorage()    ,
    editTaskData  : {},
    deleteTaskData : ''
}



const toDoTaskSlice = createSlice({
    name : 'addTask' ,
    initialState ,
    reducers : {
        // adding task to the todolist
        addTask : (state , action) => {
            const newTask = action.payload;
            state.toDoList = [...state.toDoList , newTask]
            localStorage.setItem('taskList' , JSON.stringify(state.toDoList))
            
        },

        getEditTask : (state , action) => {
           const currentData = action.payload
           const allData = [...state.toDoList]

           state.editTaskData = {index : currentData , data: allData[currentData]}
       
        },

        // set the editted task into todolist
        submitEditTask : (state , action) => {
            const {index , data} = action.payload;

            const updatedListData = [...state.toDoList]

            updatedListData[index].task = data.task
            updatedListData[index].description = data.description

            state.toDoList[index] = updatedListData[index]
            
            localStorage.setItem('taskList' , JSON.stringify(updatedListData))
        },

        // set the status of todolist
        setStatus : (state , action) => {
            const index = action.payload

            const updatedListData = [...state.toDoList]

            const status =  updatedListData[index].status 

            if(status === 'To Do'){
                updatedListData[index].status = 'In Progress';
            }
            if(status === 'In Progress'){
                updatedListData[index].status = 'Completed'      
            }
            if(status === 'Completed'){
                updatedListData[index].status = 'To Do'
            }

            localStorage.setItem('taskList' , JSON.stringify(updatedListData))
        },

        // remove the task from todolist
        removeTask : (state , action) => {
            const taskName = action.payload

            const filteredList = state.toDoList.filter((elem) => elem.task !== taskName)
          
            state.toDoList = filteredList

            localStorage.setItem('taskList' , JSON.stringify(filteredList))
            
        },
        setDeleteTask : (state, action) => {
            state.deleteTaskData = action.payload
        }

    }
});


export const {addTask , getEditTask , submitEditTask , removeTask , setDeleteTask} = toDoTaskSlice.actions;
export const {setStatus} = toDoTaskSlice.actions

export default toDoTaskSlice.reducer