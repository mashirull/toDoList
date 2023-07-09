import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShowEditModal } from '@/slider/modalSlice';
import { submitEditTask } from '@/slider/addTaskSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditTask = () => {

    const dispatch = useDispatch()
    const [task , setTask] = useState('');
    const [description , setDescription] = useState('')

       
    const editData = useSelector(state => state.toDoTask.editTaskData)

    useEffect(()=> {
        setTask(editData.data.task)
        setDescription(editData.data.description)
    },[])

    const editedTask = {
        index : editData.index,

        data : {
            task ,
            description
        }
       
}

    const submitHandler = (e)=> {
        e.preventDefault()
        if(task.trim() !== '' && description.trim() !== ''){
            dispatch(submitEditTask(editedTask))
            dispatch(setShowEditModal(false))
        }
        else{
            toast('Both field is required')
        }
    }

      

    return (
        <form onSubmit={submitHandler} >

            <div className='bg-white h-auto w-1/3 md:w-4/5 block absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5  rounded-xl'>
                <div className='flex justify-between text-xl font-bold'>
                    <h1>Edit Task</h1>
                    <p className=' cursor-pointer' onClick={() => dispatch(setShowEditModal(false))}>X</p>
                </div>
                <div className='my-4'>
                    <label htmlFor="task" className='block text-gray-500 font-medium'>Task</label>
                    <input type="text" placeholder='Type your task here...' onChange={(e) => { setTask(e.target.value)}} value={task} className=' border-gray-300 border p-3 rounded-md w-full focus:outline-none text-sm focus:border-green-400' />
                </div>
                <div className='my-4'>
                    <label htmlFor="desc" className='block text-gray-500 font-medium'>Description</label>
                    <input type="text" placeholder='Type task description...' value={description} onChange={(e) => { setDescription(e.target.value) }} className=' border-gray-300 border p-3 rounded-md w-full focus:outline-none text-sm focus:border-green-400' />
                </div>
                <div className='text-right'>
                    <input type='submit' className={`py-2 px-5 rounded-md  text-white font-bold  mt-4 bg-green-900 cursor-pointer`} value='Edit ' />
                </div>
            </div>
            <ToastContainer/>
        </form>

    )
}

export default EditTask