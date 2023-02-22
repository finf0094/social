import React from 'react';
import s from'./Content.module.css'
import Post from './Posts/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Content(props) {
    const newPostElement = React.createRef()

    const updatePostValueInput = () => {
        const text = newPostElement.current.value;
        props.updatePostValueInput(text)
    }
    const addPost = (e) => {
        e.preventDefault()
        props.addPost()
    }

    const postElements = props.state.posts.map(post => <Post postName={post.postName}
    postDescr={post.desc}
    imgSrc={post.img}
    like={post.like}/>)

    return ( 
        <div className={s.content}>
            <img src="https://www.pluggedin.ru/images/1-bigTopImage_2022_03_11_18_25_54.jpg" alt="content img" srcset="" width={1000} height={300}/>

            <ProfileInfo />

            <div className={s.addPost}>
                <h1>My posts</h1>
                <form className={s.postInput}>
                    <input type="text" onChange={updatePostValueInput} ref={newPostElement} value={props.state.addPostValueInput} placeholder="Напишите пост" />
                    <button className={s.btn} onClick={ addPost }>Add</button>
                </form>  
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
     );
}

export default Content;