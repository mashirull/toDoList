import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { getEditTask, setStatus } from '@/slider/addTaskSlice';
import { setShowEditModal , setShowDeleteModal} from '@/slider/modalSlice';
import DeleteTaskModal from '../modal/deleteTaskModal';
import { useSelector } from 'react-redux';




const ToDoCard = ({task , index}) => {

  const showDeleteModal = useSelector(state => state.showModal.showDeleteModal)



    const dispatch = useDispatch()

    const handleClick = (index)=> {
       dispatch(setShowEditModal(true))
       dispatch(getEditTask(index))
    }

  return (
    <div className='flex items-center justify-between bg-white rounded-2xl p-4 my-3 shadow-md shadow-gray-400'>
      {showDeleteModal && <DeleteTaskModal task = {task}/>}
      <div>
        <h1>{task.task}</h1>
        <p className='text-gray-400 text-sm'>{task.description}</p>
      </div>


      <div className='flex items-center'>
        <div className=' w-44 sm:w-auto flex items-center justify-center sm:flex-col'>
          <p className={`bg-gray-200 ${task.status === 'To Do' ? 'text-red-800' : task.status === 'In Progress' ? 'text-yellow-500' : 'text-green-600' }  py-0 px-2 text-sm rounded-md font-bold cursor-pointer mr-4 w-fit `} onClick={()=>dispatch(setStatus(index))}>{task.status}</p>
        </div>
          <span className='p-2 text-3xl cursor-pointer text-gray-600' onClick={()=>{handleClick(index)}}><BiEdit /></span>
          <span className='p-2 text-3xl cursor-pointer text-red-800' 
          onClick={()=>{dispatch(setShowDeleteModal(true))  }}><MdOutlineDeleteForever /></span>
        </div>


    </div>
  )
}



export default ToDoCard