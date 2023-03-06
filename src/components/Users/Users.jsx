import s from './users.module.css'
import userImage from '../../assets/image/icon-256x256.png'
import Preloader from '../utils/Preloader'
import { NavLink } from 'react-router-dom'


function Users(props) {
    const pagesCount = Math.ceil(props.countUsers / props.countPage)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {props.isFetching ? <div><Preloader /></div> : null}

        <div className={s.pageNumbers}>
            {pages.map(p => {
                return <span key={p} className={p === props.currentPage ? s.currentPage : s.pageNum} onClick={() => props.onChangeUsers(p)}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id} className={s.rowFlexB}>
            <span className={s.image}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userImage} alt="img" width={76} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }
                        }>follow</button>}
                </div>
            </span>
            <span className={s.info}>
                <span className={s.name}>
                    <h3>
                        {u.name}
                    </h3>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    {/* <div>{u.location.city}</div>
                    <h5>{u.location.country}</h5> */}
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;