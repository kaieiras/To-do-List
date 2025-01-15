import PropTypes from "prop-types";
import { AlarmClock, BookText, TypeOutline } from "lucide-react";

export default function Details({ task }) {
  // Função para formatar a data
  function formateDate(taskDate) {
    let newDate = new Date(taskDate);
    return newDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }

  return (
    <div className="p-3 bg-gray-100 rounded-md flex-col">
      <p className="flex gap-2 font-mono text-sm"><TypeOutline size={18}/> Título: {task.title}</p>
      <p className="flex gap-2 font-mono text-sm">
        <BookText size={18}/> Descrição: {task.description || "Sem descrição"}
      </p>
      <p className="flex gap-2 font-mono text-sm">
        <AlarmClock size={18}/> Data de criação: {formateDate(task.date)}
      </p>
    </div>
  );
}

Details.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool,
    date: PropTypes.string,
  }).isRequired,
};
