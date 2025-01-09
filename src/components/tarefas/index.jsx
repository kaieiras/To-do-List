
import PropTypes from "prop-types";

export default function Tarefas(props) {
  console.log(props.tasks); // Verifique a estrutura de tasks no console
  return (
    <div className="bg-[#2e2e2e] w-3/4 rounded-md shadow-md">
      <ul className='p-1 rounded-md shadow'>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <button className="bg-[#202020] w-full text-white h-[35px] rounded-md shadow-md m-1 p-3 flex items-center">{task.title}</button>
            <button>{}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tarefas.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      iscompleted: PropTypes.bool,
      data: PropTypes.string,
    })
  ).isRequired,
};
