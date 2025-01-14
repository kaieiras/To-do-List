import Statistic from './components/Statistic'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Nav from './components/nav';

import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';

import './output.css'


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
);

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks])

function onTaskClick(taskId, taskCompleted){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      };
      return task;
    })
    setTasks(newTasks);

    if(taskCompleted) return toast.info("Tarefa reiniciada.");

    toast.success('Tarefa completada com sucesso!');
}

function OnDeleteTaskClick(taskId){
   const newTasks = tasks.filter(task => task.id !== taskId)
   setTasks(newTasks);
   toast.error("Tarefa deletada com sucesso")
}

function OnAddTaskSubmit(title, description){
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false,
    date: new Date().toString(),
  };
  setTasks([...tasks, newTask]);
  toast.info("Tarefa criada com sucesso.")
}
  
  return (
    <>
    <Nav />
    <div className='bg-white w-10/12 min-h-[75vh] md:h-[75vh] rounded-[30px] mx-auto my-10 flex flex-wrap md:flex-nowrap justify-between gap-3 p-6'>
      <section className='flex flex-col w-full md:w-9/12 gap-6'>
        <AddTask OnAddTaskSubmit={OnAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} OnDeleteTaskClick={OnDeleteTaskClick} />
      </section>
      <section className='w-full md:w-3/5'>
       <Statistic tasks={tasks} onTaskClick={onTaskClick} OnDeleteTaskClick={OnDeleteTaskClick}/>
      </section>
      <ToastContainer />
</div>

  </>
  )
}

export default App
