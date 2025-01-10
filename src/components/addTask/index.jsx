import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddTask({ OnAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <>
        <div className="bg-[#2e2e2e] rounded-md shadow-2xl flex flex-col gap-3 p-5">
         <input 
            type="text" 
            placeholder="Adicione uma tarefa" 
            className="bg-[#202020] text-white border-slate-300 px-4 py-2 rounded-md font-medium"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
         <input type="text"
            placeholder="Adicione uma descricão" 
            className="bg-[#202020] text-white border-slate-300 px-4 py-2 rounded-md font-medium"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
         <button type="submit" onClick={() =>{
            if(!title.trim()) {
                toast.error("Campo não pode estar em branco.")
                return;
            }
            OnAddTaskSubmit(title, description)
            setTitle("");
            setDescription("");
         }} className="bg-green-600 text-white rounded-md px-4 py-1"> Enviar </button>
       </div>
        </>
       )
}

AddTask.propTypes = {
    OnAddTaskSubmit: PropTypes.func.isRequired,
}