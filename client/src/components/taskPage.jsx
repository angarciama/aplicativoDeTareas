import Task from "./task";
const misTareas = ["tarea1", "tarea2", "tarea3"]

function TaskPage(){
    return(
        <div className="container">
            <h1>Mi lista de tareas</h1>
            {misTareas.map(tarea => <Task description={tarea}/>)}
        </div>
    )
}

export default TaskPage;