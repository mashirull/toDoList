import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowDeleteModal } from '@/slider/modalSlice'
import { removeTask } from '@/slider/addTaskSlice'

const DeleteTaskModal = ({task}) => {

    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(removeTask(task.task))
        dispatch(setShowDeleteModal(false))
    }

  return (
    <div  className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-20'>
        <div className='bg-white w-1/3 md:w-4/5 text-center absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8  rounded-2xl'>
            <h1 className='text-xl font-bold'>Are you sure, you want to delete this task</h1>
            <div className='flex item-center justify-center mt-6'>
                <button className='bg-red-700 py-2 px-4 text-white text-md rounded-lg mr-3' 
                onClick={handleClick}>Delete</button>

                <button className='bg-white text-gray-400 py-2 px-4 border border-gray-400 text-md rounded-lg ml-3'     onClick={()=>dispatch(setShowDeleteModal(false))}>Cancle</button>  
            </div>
        </div>
    </div>
  )
}




export default DeleteTaskModal