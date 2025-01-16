import { Trash2, RefreshCcw, ChevronDown, ChevronUp, ListChecks, NotepadText  } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Statistic({ tasks, onTaskClick, OnDeleteTaskClick }) {
  const [seeCompleted, setSeeCompleted] = useState(false);

  // Filtra tarefas concluídas
  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <div className="bg-containerColor rounded-md shadow-md overflow-auto flex-col">
      {/* Verifica se há tarefas concluídas */}
      {completedTasks.length > 0 ? (
        <button
          className="w-full bg-slate-500 hover:bg-slate-700 rounded-md text-white font-medium flex justify-between p-2"
          onClick={() => setSeeCompleted(!seeCompleted)}>Ver tarefas concluídas
          {!seeCompleted ? <ChevronDown /> : <ChevronUp />}
        </button>)
      : 
      (<h1 className="p-3 text-center font-medium text-1.5xl flex gap-3"><ListChecks /> Você ainda não tem tarefas concluidas.</h1>)}

      {/* Exibe tarefas concluídas se `seeCompleted` for verdadeiro */}
      {seeCompleted && (
        <ul className="space-y-4 p-3 rounded-b-lg shadow font-medium">
          {completedTasks.map(task => (
            <li key={task.id} className="flex gap-2">
              {/* Título da Tarefa */}
              <button
                  className={`w-full flex gap-3 bg-white hover:bg-[#eeeeee] italic text-left font-sans rounded-md border-b-4 p-3 ${
                    task.isCompleted && "line-through"
                  }`}
                >
                  <NotepadText className="text-[#001C40]"/>
                  {task.title}
                </button>

              {/* Botão para "desconcluir" */}
              <button
                className="bg-white hover:bg-slate-200 rounded-md p-2"
                onClick={() => onTaskClick(task.id, task.isCompleted)}
                title="Refazer tarefa"
              >
                <RefreshCcw className="text-black" />
              </button>

              {/* Botão para excluir tarefa */}
              <button
                className="text-red-700 rounded-md bg-white hover:bg-slate-200 p-2"
                onClick={() => OnDeleteTaskClick(task.id)}
                title="Excluir tarefa"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Statistic.propTypes = {
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