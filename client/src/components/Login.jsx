import { useRef } from "react";
import authService from "../services/auth-services";

function Login(){
    const email = useRef(null);
    const password = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        authService.login(email.current.value, password.current.value)
    }

    return(
        <div className="container">
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <input
                    ref={email}
                    type="text"
                    placeholder="email"                    
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="password"                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;