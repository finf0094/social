import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "838422b0-ac2b-44fa-8bef-a2960f959dc2"
    }
})

const usersAPI = {
    getUsers: (countPage, page) =>
        instance.get(`/users?page=${page}&count=${countPage}`).then(res => res.data),


    unfollow: (userId) => instance.delete(`/follow/${userId}`),

    follow: (userId) => instance.post(`/follow/${userId}`)
}

export const headerAPI = {
    auth: () => instance.get('/auth/me').then(res => res.data.data)
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`/profile/${userId}`),

    getUserStatus: (userId) => instance.get(`/profile/status/${userId}`),
    
    updateStatus: (status) => instance.put('/profile/status', {status: status})
}

export default usersAPI