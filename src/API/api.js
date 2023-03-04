import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "838422b0-ac2b-44fa-8bef-a2960f959dc2"
    }
})


const getUsers = (countPage, page) => 
    instance.get(`/users?page=${page}&count=${countPage}`).then(res => res.data)

export default getUsers;

export const unfollowAPI = (userId) => {
    return instance.delete(`/follow/${userId}`)
}


export const followAPI = (userId) => instance.post(`/follow/${userId}`)
