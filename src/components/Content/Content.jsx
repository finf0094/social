import s from'./Content.module.css'
import Post from './Posts/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Content() {
    return ( 
        <div className={s.content}>
            <img src="https://www.pluggedin.ru/images/1-bigTopImage_2022_03_11_18_25_54.jpg" alt="content img" srcset="" width={1000} height={300}/>

            <ProfileInfo />

            <div className={s.addPost}>
                <h1>My posts</h1>
                <form className={s.postInput}>
                    <input type="text" name="" id="" placeholder="Напишите пост" />
                    <button className={s.btn}>Add</button>
                </form>  
            </div>

            <div className={s.posts}>
                <Post postName="Hello world"
                 postDescr="Hello world this is my first post guyyyyss"
                 imgSrc="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"
                 like="3"/>
                 <Post postName="YEEEEE BROOO i'm a born"
                 postDescr="This is my second post and this social network in the best in world YEEEEEEEEEEEEE!!!!"
                 imgSrc="https://i.pinimg.com/736x/3a/9d/0f/3a9d0f6e815b35f98129793d89a997f3.jpg"
                 like="14" />
                 
            </div>
        </div>
     );
}

export default Content;