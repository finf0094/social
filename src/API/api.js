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
    auth: (setAuthUserData) => {
        instance.get('/auth/me').then(res => {
            const { id, email, login } = res.data.data
            setAuthUserData(id, login, email)
        })
    }
}


export default usersAPI