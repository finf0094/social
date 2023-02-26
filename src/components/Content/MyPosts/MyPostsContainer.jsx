import MyPosts from "./MyPosts";
import { addPostActionCreator, updatePostValueInputActionCreator } from "../../../state/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postValueInput: state.profilePage.addPostValueInput,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updatePostValueInput: (text) => dispatch(updatePostValueInputActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;