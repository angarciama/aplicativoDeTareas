import Navbar from "./Navbar";
import Task from "./task";
const misTareas = ["tarea1", "tarea2", "tarea3"]

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1>Mi lista de tareas</h1>
                {misTareas.map(tarea => <Task description={tarea}/>)}
            </div>
            
        </>        
    );
}

export default App;