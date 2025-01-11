import { Trash2, RefreshCcw, Check, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

export default function Tasks({tasks, onTaskClick, OnDeleteTaskClick}) {
  console.log(tasks); // Verifique a estrutura de tasks no console
  return (
    <div className="bg-[#2e2e2e] rounded-md shadow-md">
      <ul className='space-y-4 p-3 rounded-md shadow font-medium'>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button 
              className={`bg-[#202020] w-full text-white rounded-md shadow-md p-3 flex ${task.isCompleted && 'line-through'}`}>
                {task.title}
            </button>

            <button>
              <ChevronRight 
               className="text-white bg-[#202020] rounded-md flex w-full h-full"/>
            </button>

            <button>
              {!task.isCompleted ? <Check 
               onClick={() => onTaskClick(task.id)} 
               className={`text-green-500 bg-[#202020] rounded-md h-full`}/> 
               : 
               <RefreshCcw 
               onClick={() => onTaskClick(task.id)} 
               className={`text-white bg-[#202020] rounded-md h-full`}
              />}
            </button>
            
            <button>
              <Trash2
              onClick={() => OnDeleteTaskClick(task.id)} 
              className="text-red-700 rounded-md bg-[#202020]	"/>
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
