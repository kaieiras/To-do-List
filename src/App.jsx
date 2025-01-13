import Statistic from './components/Statistic'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';
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

function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      };
      return task;
    })
    setTasks(newTasks);
    toast.success('Tarefa concluida')
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
     <h1 className="text-white text-3xl m-5 text-center font-bold ">Projeto Lista de tarefas</h1>
     <div className='bg-white w-11/12 h-[75vh] rounded-[30px] flex gap-3 justify-center m-auto p-6'>
      <section className='flex flex-col w-2/5 gap-6'>
        <AddTask OnAddTaskSubmit={OnAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} OnDeleteTaskClick={OnDeleteTaskClick}/>
      </section>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
