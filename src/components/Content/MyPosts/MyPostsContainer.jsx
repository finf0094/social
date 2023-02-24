import MyPosts from "./MyPosts";
import { addPostActionCreator, updatePostValueInputActionCreator } from "../../../state/profileReducer";

function MyPostsContainer(props) {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updatePostValueInput = (text) => {
        const action = updatePostValueInputActionCreator(text);
        props.dispatch(action)
    }
    
    return ( <MyPosts addPost={addPost}
                      postValueInput={props.profilePage.addPostValueInput}
                      posts={props.profilePage.posts}
                      updatePostValueInput={updatePostValueInput}
                      /> );
}

export default MyPostsContainer;