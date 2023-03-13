import { profileAPI } from "../API/api";

const initialState = {
  posts: [
    {
      postName: 'Hello World',
      desc: 'Hello world this is my first post guyyyyss',
      img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
      like: 3
    },
    {
      postName: 'YEEEEE BROOO im a born',
      desc: 'This is my second post and this social network in the best in world YEEEEEEEEEEEEE!!!!',
      img: 'https://i.pinimg.com/736x/3a/9d/0f/3a9d0f6e815b35f98129793d89a997f3.jpg',
      like: 14
    }
  ],
  addPostValueInput: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST':
      if (state.addPostValueInput === '') {
        return state;
      } else {
        const newPost = {
          postName: 'New Post',
          desc: state.addPostValueInput,
          img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
          like: 0
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          addPostValueInput: ''
        };
      }
    case 'UPDATE-NEW-POST-TEXT':
      return {
        ...state,
        addPostValueInput: action.value
      };
    case 'SET-PROFILE':
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

// dispatch's
export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updatePostValueInputActionCreator = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  value: text
});
export const setProfileAC = (profile) => ({ type: 'SET-PROFILE', profile });
export default profileReducer;

// thunk's
export const setProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(res => dispatch(setProfileAC(res.data))
    )
  }
}