import { useState } from "react"

export default function Form(props) {
  const [task, setTask] = useState(
    {
      id:1,
      title: "Estudar matemática",
      description:"Estudar matemática para vestibular",
      iscompleted: false,
      data:'',
    },
  )
    return(
        <div className="container">
              <form onSubmit={onSubmit} className="form-add">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Adicione uma tarefa"
                  className="send"
                />
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Adicione uma tarefa"
                  className="send"
                />
                <button type="submit" className="btn">
                  <FaPlus />
                </button>
              </form>
        </div>
    )
}
    