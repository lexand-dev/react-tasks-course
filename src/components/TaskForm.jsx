import React from 'react'
import {useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle("");
        setDescription("");
    }

  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input onChange={(e) => setTitle (e.target.value)} type="text" placeholder="Write a task" value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>
            
            <textarea placeholder="Write a description" onChange={(e) => setDescription(e.target.value)} value={description} className='bg-slate-300 p-3 w-full mb-2'/>
            <br />
            <br />
            <button className='bg-indigo-500 px-3 py-1 text-white rounded-md'>
                Guardar
            </button>
        </form>
    </div>
  )
}

export default TaskForm