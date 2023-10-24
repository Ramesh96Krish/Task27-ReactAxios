import axios from "axios";

const Base_Url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    const response = await axios.get(Base_Url);
    return response;
};

export const addUser = async (payload) => {
    const response = await axios.post(Base_Url, payload);
    return response;
};

export const UpdateUser = async (userId,payload) => {
    const response = await axios.put(`${Base_Url}/${userId}`,payload);
    return response;
};

export const deleteUser = async (userId) => {
    const response = await axios.delete(`${Base_Url}/${userId}`);
    return response;
};