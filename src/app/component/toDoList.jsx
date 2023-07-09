import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ToDoCard from './toDoCard';
import { setShowAddModal } from '@/slider/modalSlice';

const ToDoList = () => {

    const toDoList = useSelector(state => state.toDoTask.toDoList)
    const dispatch = useDispatch()
    
    return (
        <div className='mt-9'>

            {toDoList.length ===0 ? <h1 className='text-center flex items-center justify-center text-gray-400 mt-20'>No Task is Added Please Add Your Task <span className='text-4xl inline-block cursor-pointer ml-5' onClick={()=>dispatch(setShowAddModal(true))}><FaPlus/></span></h1> : toDoList.map((task ,i) => {
                
                return  <ToDoCard task = {task} index = {i} key={i}/>
            })}
          
        </div>
    )
}

export default ToDoList