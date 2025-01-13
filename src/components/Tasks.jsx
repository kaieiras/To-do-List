import { Trash2, RefreshCcw, Check, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Tasks({tasks, onTaskClick, OnDeleteTaskClick}) {
  const navigate = useNavigate(); // Verifique a estrutura de tasks no console
  
  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`)
  }
  
  
  return (
    <div className="bg-containerColor rounded-md shadow-md">
      <ul className='space-y-4 p-3 rounded-md shadow font-medium'>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button 
              className={`bg-inputColor w-full text-left rounded-md shadow-lg p-3 ${task.isCompleted && 'line-through'}`}>
                {task.title}
            </button>

            <button 
            onClick={() => onSeeDetailsClick(task)}
            className=" bg-slate-100 rounded-md p-2">
              <ChevronRight />
            </button>
            <button 
              className="text-green-500 bg-slate-100 rounded-md p-2"
              onClick={() => onTaskClick(task.id)} 
            >
              {!task.isCompleted ? <Check /> : <RefreshCcw className="text-black"/>}
            </button>
            
            <button className="text-red-700 rounded-md bg-slate-100	p-2">
              <Trash2 onClick={() => OnDeleteTaskClick(task.id)}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      iscompleted: PropTypes.bool,
      data: PropTypes.string,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  OnDeleteTaskClick: PropTypes.func.isRequired,
};
