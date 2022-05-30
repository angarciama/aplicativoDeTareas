function Task(props) {
    const description = "Descripcion de la tarea"
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                {props.description}
            </label>
        </div>       
    );
}

export default Task;