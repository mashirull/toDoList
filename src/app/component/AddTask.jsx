import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowAddModal } from '@/slider/modalSlice';
import { addTask } from '@/slider/addTaskSlice';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {

    const dispatch = useDispatch()
    const [task , setTask] = useState('');
    const [description , setDescription] = useState('')
    const [green , setGreen] = useState(false)

    const toDoList = useSelector(state => state.toDoTask.toDoList)
       
    const toDoItem = {
        task,
        description,
        status : 'To Do'
    }

    const submitHandler = (e)=> {
        e.preventDefault()
        if(task.trim() !== '' && description.trim() !== ''){ // checking if input field is empty for validation
            const excitingTask = toDoList.filter((elem) => elem.task === task)

            if(toDoList.length !== 0){
                if(excitingTask.length !== 0){ // checking for exciting task
                    toast(`${task} is Already Added`)
                }
                else{
                    dispatch(addTask(toDoItem))
                    dispatch(setShowAddModal(false))
                }
                
            }
            else{
                dispatch(addTask(toDoItem))
                dispatch(setShowAddModal(false))
            }   
        }
    }


   // checking  button for green and gray
    const handleError = () => {
        if(task.trim() !== '' && description.trim() !== ''){
            setGreen(true)
        }
         else{
            setGreen(false)
        }
    }    


  return (
    <form  onSubmit={submitHandler} >
            
            <div className='bg-white h-auto w-1/3 md:w-4/5 block absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5  rounded-xl'>
                <div className='flex justify-between text-xl font-bold'>
                    <h1>Add Task</h1>
                    <p className=' cursor-pointer' onClick={()=>dispatch(setShowAddModal(false))}>X</p>
                </div>
                <div className='my-4'>
                    <label htmlFor="task" className='block text-gray-500 font-medium'>Task</label>
                    <input type="text"  placeholder='Type your task here...' onChange={(e)=>{setTask(e.target.value), handleError()}} value={task} className=' border-gray-300 border p-3 rounded-md w-full focus:outline-none text-sm focus:border-green-400'/>
                </div>
                <div className='my-4'>
                    <label htmlFor="desc" className='block text-gray-500 font-medium'>Description</label>
                    <input type="text" placeholder='Type task description...' value={description} onChange={(e)=>{setDescription(e.target.value) , handleError()}} className=' border-gray-300 border p-3 rounded-md w-full focus:outline-none text-sm focus:border-green-400'/>
                </div>
                <div className='text-right'>
                    <input type='submit' className={`py-2 px-5 rounded-md  text-white font-bold  mt-4 ${green ? 'bg-green-900 cursor-pointer' : 'bg-gray-500  cursor-not-allowed'}`}  value='Add'/>
                </div>
            </div>
            <ToastContainer/>
        </form>

  )
}

export default AddTask;