const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        state.posts.push({
            postName: 'New Post', desc: state.addPostValueInput,
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', like: 0
        })
        state.addPostValueInput = ''
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.addPostValueInput = action.value;
    } 
    return state
}

export const addPostActionCreator = () => ({type: "ADD-POST"})

export const updatePostValueInputActionCreator = (text) => {
    return {type: "UPDATE-NEW-POST-TEXT", value: text}
}

export default profileReducer;