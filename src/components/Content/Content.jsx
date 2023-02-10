import './Content.css'

function Content() {
    return ( 
        <div className="content">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="content img" srcset="" width={1000} height={300} />
            <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile img" srcset="" width={200} height={200} />
                <div className='profile-info'>
                    <h3 className="name">Dmitriy K.</h3>
                    <p>Data of Birthday: </p>
                    <p>City: </p>
                    <p>Education: </p>
                </div>
            </div>
            <form className="add-post">
                <h1>My posts</h1>
                <input type="text" name="" id="" placeholder="Напишите пост" />
                <button>Add</button>
            </form>
            <div className="posts">

            </div>
        </div>
     );
}

export default Content;