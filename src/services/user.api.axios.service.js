import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-Type': 'application/json'}
});

let axiosInstancePost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const getUsersAxios = () => {
  return axiosInstance.get()
}

const getUserAxios = (id) => {
    return axiosInstance.get('/'+id)
}

const getPostAxios = () => {
    return axiosInstancePost.get()
}

export {getUsersAxios, getUserAxios, getPostAxios}

