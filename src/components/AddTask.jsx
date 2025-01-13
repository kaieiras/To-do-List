import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddTask({ OnAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") { // Verifica se a tecla "Enter" foi pressionada
            if (!title.trim()) {
                toast.error("O campo tarefa não pode estar em branco.");
                return;
            }
            OnAddTaskSubmit(title, description);
            setTitle(""); // Limpa o título após o envio
            setDescription(""); // Limpa a descrição após o envio
        }
    };


    return(
        <>
        <div className="bg-containerColor rounded-md shadow-2xl flex flex-col gap-3 p-5">
         <input 
            type="text" 
            placeholder="Adicione uma tarefa" 
            className="bg-inputColor text-gray-800 border-slate-400 px-4 py-2 rounded-md font-medium"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onKeyDown={handleKeyDown}
            />
         <input type="text"
            placeholder="Adicione uma descricão" 
            className="bg-inputColor text-gray-800 border-slate-300 px-4 py-2 rounded-md font-medium"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            onKeyDown={handleKeyDown}
            />
         <button type="submit" onClick={() =>{
            if(!title.trim()) {
                toast.error("O campo tarefa não pode estar em branco.")
                return;
            }
            OnAddTaskSubmit(title, description)
            setTitle("");
            setDescription("");
         }} className="bg-[#17A6A6] text-white rounded-md px-4 py-1"> Enviar </button>
       </div>
        </>
       )
}

AddTask.propTypes = {
    OnAddTaskSubmit: PropTypes.func.isRequired,
}