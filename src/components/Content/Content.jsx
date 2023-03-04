import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import s from'./Content.module.css'
import Preloader from '../utils/Preloader';


function Content(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return ( 
        <div className={s.content}>
            <img src="https://www.pluggedin.ru/images/1-bigTopImage_2022_03_11_18_25_54.jpg" alt="content img" srcset="" width={1000} height={300}/>

            <ProfileInfo profile={props.profile}/>

            <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>

        </div>
     );
}

export default Content;