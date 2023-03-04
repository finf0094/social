import { Component } from "react";
import axios from 'axios';
import s from './users.module.css'
import userImage from '../../assets/image/icon-256x256.png'

class UsersC extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setCountUsers(response.data.totalCount >= 50 ? 50 : response.data.totalCount)
                })
    }
    onChangeUsers = (p) => {
        this.props.setPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.countPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
    }


    render() {
        const pagesCount = Math.ceil(this.props.countUsers / this.props.countPage)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.pageNumbers}>
                {pages.map(p => {
                    return <span key={p} className={p === this.props.currentPage ? s.currentPage : s.pageNum} onClick={() => this.onChangeUsers(p)}>{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id} className={s.rowFlexB}>
            <span className={s.image}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userImage} alt="img" width={76} />
                </div>
                <div>
                {u.followed 
                    ? <button className={s.button} onClick={() => {this.props.unFollow(u.id)}}>unfollow</button> 
                    : <button className={s.button} onClick={() => {this.props.follow(u.id)}}>follow</button>}
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
}


export default UsersC;
