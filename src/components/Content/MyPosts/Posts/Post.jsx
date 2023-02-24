import s from './post.module.css'

function Post(props) {
    return ( 
        <div className={s.post}>
            <img src={props.imgSrc} alt="avatar" srcset="" />
            <div className={s.postComment}>
                <h2>{props.postName}</h2>
                <p>{props.postDescr}</p>
                <div className={s.likes}>
                    <img src="https://e7.pngegg.com/pngimages/929/555/png-clipart-logo-facebook-like-button-like-cdr-angle-thumbnail.png" alt="Like" srcset="" />
                    <p>{props.like}</p>
                </div>
            </div>
        </div>
     );
}

export default Post;