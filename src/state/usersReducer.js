const initialState = {
        users: [
            {id: 1, followed: false, fullName: 'Askhat Kulush',status: 'i am a boss', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', location: {city: "Atyrau", country: "Kazakhstan"}},
            {id: 2, followed: true, fullName: 'Meirambek Zholmukhanov', status: 'i am a boss two', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png', location: {city: "Almaty", country: "Kazakhstan"}},
            {id: 3, followed: false, fullName: 'Aset Bisenbayev', status: 'i am a boss three', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png', location: {city: "Nur-sultan", country: "Kazakhstan"}}
        ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            case 'UNFOLLOW':
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (action.userID === u.id) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
            case 'SET-USERS': 
            return {...state, users: [state.users, action.users]}
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID) => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users) => ({type: 'SET-USER', users})

export default usersReducer;