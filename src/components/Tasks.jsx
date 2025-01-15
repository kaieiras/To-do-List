import { Trash2, Check, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import Details from "./details";

export default function Tasks({ tasks, onTaskClick, OnDeleteTaskClick }) {
  const [detailsVisible, setDetailsVisible] = useState(null); // Controla os detalhes por ID da tarefa

  function toggleDetails(taskId) {
    setDetailsVisible((prev) => (prev === taskId ? null : taskId));
  }

  return (
    <div className="bg-containerColor rounded-md shadow-md overflow-auto">
      <ul className="space-y-4 p-3 rounded-md shadow font-medium">
        {tasks
          .filter((task) => !task.isCompleted)
          .map((task) => (
            <li key={task.id} className="space-y-2">
              {/* Botões alinhados */}
              <div className="flex gap-2">
                <button
                  className={`w-full hover:bg-[#eeeeee] text-left rounded-md border-b-4 p-3 ${
                    task.isCompleted && "line-through"
                  }`}
                >
                  {task.title}
                </button>

                <button
                  onClick={() => toggleDetails(task.id)}
                  className="bg-slate-100 hover:bg-slate-200 rounded-md p-2"
                >
                  <ChevronRight />
                </button>

                <button
                  className="text-green-500 bg-slate-100 hover:bg-slate-200 rounded-md p-2"
                  onClick={() => onTaskClick(task.id, task.isCompleted)}
                >
                  <Check />
                </button>

                <button
                  className="text-red-700 rounded-md bg-slate-100 hover:bg-slate-200 p-2"
                  onClick={() => OnDeleteTaskClick(task.id)}
                >
                  <Trash2 />
                </button>
              </div>

              {/* Detalhes visíveis com base no ID da tarefa */}
              {detailsVisible === task.id && <Details task={task}/>}
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
      isCompleted: PropTypes.bool,
      date: PropTypes.string,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  OnDeleteTaskClick: PropTypes.func.isRequired,
};
