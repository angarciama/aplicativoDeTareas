import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

const login = async (email, password) => {
    try{
        const token = await axios.post(API_URL + '/login', {
            email,
            password
        });
        if (token.data) {
            localStorage.setItem('user', JSON.stringify(token.data))
        }
    } catch (error) {
        console.error(error);
    }    
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const authService = {
    login,
    getCurrentUser
}

export default authService