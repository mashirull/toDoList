'use client'
import {FaPlus} from 'react-icons/fa';
import ToDoList from './component/toDoList';
import AddTaskModal from './modal/AddTaskModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowAddModal } from '@/slider/modalSlice';
import EditTaskModal from './modal/EditTaskModal';
import DeleteTaskModal from './modal/deleteTaskModal';


export default function Home() {

  const showAddModal = useSelector(state => state.showModal.showAddModal)

  const showEditModal = useSelector(state => state.showModal.showEditModal)
  
  const showDeleteModal = useSelector(state => state.showModal.showDeleteModal)

  const dispatch = useDispatch()

  return (
   <>

   <div className="w-1/2 h-9  m-auto mt-20 lg:w-4/5 md:w-11/12 sm:w-full">
      <div className="flex justify-between">
        <h1 className="text-center text-3xl font-bold text-gray-950">Task List </h1>
        <button className="bg-green-700 text-white py-3 px-5  rounded-md flex items-center justify-center shadow-lg  shadow-gray-400" onClick={()=>dispatch(setShowAddModal(true))}><span className='mr-3'><FaPlus/></span>  Add Task</button>
      </div>
        <ToDoList/>
   </div>
   
   {showAddModal && <AddTaskModal/>}
   {showEditModal && <EditTaskModal/>}
   {showDeleteModal && <DeleteTaskModal/>}

   <h1 className='text-xl text-gray-200 absolute bottom-5 left-5 '>MASHIRUL HAQUE</h1>
   </>
  )
}
