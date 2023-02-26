import s from './users.module.css'
const Users = (props) => {
    const user = props.users.map(u => {
        return (<div key={u.id} className={s.rowFlexB}>
            <span className={s.image}>
                <div>
                    <img src={u.photoUrl} alt="img" width={50} />
                </div>
                <div>
                {u.followed 
                    ? <button className={s.button} onClick={() => {props.unFollow(u.id)}}>unfollow</button> 
                    : <button className={s.button} onClick={() => {props.follow(u.id)}}>follow</button>}
                </div>
            </span>
            <span className={s.info}>
                <span className={s.name}>
                    <h3>
                        {u.fullName}
                    </h3>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <h5>{u.location.country}</h5>
                </span>
            </span>
        </div>)
    });
    return (<div>
        {user}
    </div>)
}

export default Users;