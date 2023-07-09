import React, { useState } from 'react';
import AddTask from '../component/AddTask';

const AddTaskModal = () => {
   

  return (
    <div className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-40'>
        <AddTask/>
    </div>
  )
}

export default AddTaskModal
