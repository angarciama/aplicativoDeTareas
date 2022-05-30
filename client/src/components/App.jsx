import { useEffect, useState } from "react";
import authService from "../services/auth-services";
import Login from "./Login";
import Navbar from "./Navbar";
import TaskPage from "./taskPage";

function App() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {        
        const user = authService.getCurrentUser();
        if(user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <>
            <Navbar/>
            {currentUser ? <TaskPage/> : <Login/>}     
        </>        
    );
}

export default App;