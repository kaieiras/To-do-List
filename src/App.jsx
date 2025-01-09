import Statistic from './components/estatisticas'
// import Form from './components/form/Form';
import Tarefas from './components/tarefas';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

// import { FaEdit, FaWindowClose } from "react-icons/fa";
//import './index.css'
import './output.css'
//import './App.css'


function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "Estudar matemática",
      description:"Estudar matemática para vestibular",
      iscompleted: false,
      data:'',
    },
    {
      id:2,
      title: "Estudar Portugues",
      description:"Estudar matemática para vestibular",
      iscompleted: false,
      data:'',
    },
    {
      id:3,
      title: "Estudar Ingles",
      description:"Estudar matemática para vestibular",
      iscompleted: false,
      data:'',
    },
    {
      id:4,
      title: "Estudar Francês",
      description:"Estudar matemática para vestibular",
      iscompleted: false,
      data:'',
    }
  ]);

  return (
    <>
     <h1 className="text-white text-3xl m-5 ">Projeto Lista de tarefas</h1>
     <div className='w-screen flex justify-center'>
      <section className='flex gap-10 box-border'>
        <Tarefas tasks={tasks}/>
        <Statistic />
        <ToastContainer />
      </section>
    </div>
    </>
  )
}

export default App
