import React from 'react';
import EditTask from '../component/EditTask';

const EditTaskModal = () => {
  return (
    <div  className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-40'>
        <EditTask/>
    </div>
  )
}

export default EditTaskModal