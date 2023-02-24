import React from 'react';

import Post from './Posts/Post'

import s from './myPosts.module.css'

function MyPosts(props) {
    const newPostElement = React.createRef()

    const onAddPost = (e) => {
        e.preventDefault();
        props.addPost();
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updatePostValueInput(text);
    }

    const postElements = props.posts.map((post, index) => <Post key={index} postName={post.postName}
    postDescr={post.desc}
    imgSrc={post.img}
    like={post.like}/>)
    return (
        <>
            <h1>My posts</h1>
            <form className={s.postInput}>
                <input type="text" onChange={onPostChange} ref={newPostElement} value={props.postValueInput} placeholder="Напишите пост" />
                <button className={s.btn} onClick={onAddPost}>Add</button>
            </form>

            <div className={s.posts}>
                {postElements}
            </div>
        </>
        );
}

export default MyPosts;