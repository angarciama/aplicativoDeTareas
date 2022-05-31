import axios from "axios";

const API_URL = "http://localhost:3001/api/task";
const token = localStorage.getItem("user");

const getAllTasks = () => {
    return axios.get(API_URL, {
        headers: {
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    });
}

const createTasks = (description) => {
    return axios.get(API_URL, {
        headers: {
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    }, {description});
}


const taskServices = {
    getAllTasks,
    createTasks
}

export default taskServices;