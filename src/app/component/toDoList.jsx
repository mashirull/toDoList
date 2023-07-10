import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ToDoCard from './toDoCard';
import { setShowAddModal } from '@/slider/modalSlice';

const ToDoList = () => {

    const toDoList = useSelector(state => state.toDoTask.toDoList)
   
 
    return (
        <div className='mt-9'>

            {toDoList  &&  toDoList.map((task ,i) => {
                return  <ToDoCard task = {task} index = {i} key={i}/>
            })}
          
        </div>
    )
}

export default ToDoList