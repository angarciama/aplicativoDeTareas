import {Routes, Route} from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";
import TaskPage from "./taskPage";

function App() {    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/logout" element={ <Logout /> } />
                <Route path="/signup" element={ <TaskPage /> } />
                <Route path="/task" element={ <TaskPage /> } />
            </Routes>

        </>        
    );
}

export default App;