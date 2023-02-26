const initialState = {
        posts: [
            {postName: 'Hello World', desc: 'Hello world this is my first post guyyyyss',
            img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg', like: 3},
            {postName: 'YEEEEE BROOO im a born', desc: 'This is my second post and this social network in the best in world YEEEEEEEEEEEEE!!!!',
            img: 'https://i.pinimg.com/736x/3a/9d/0f/3a9d0f6e815b35f98129793d89a997f3.jpg', like: 14}
        ],
        addPostValueInput: 'Hello'
}

const profileReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        const newPost = {
            postName: 'New Post', desc: state.addPostValueInput,
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', like: 0
        }
        const stateCopy = {...state}
        stateCopy.posts = [...state.posts, newPost]
        stateCopy.addPostValueInput = ''
        if (state.addPostValueInput === '') {
            return state;
        } else {
            return stateCopy;
        }
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        const stateCopy = {...state};
        stateCopy.addPostValueInput = action.value;
        return stateCopy;
    } 
    return state
}
window.initialState = initialState;
export const addPostActionCreator = () => ({type: "ADD-POST"});

export const updatePostValueInputActionCreator = (text) => {
    return {type: "UPDATE-NEW-POST-TEXT", value: text}
};

export default profileReducer;