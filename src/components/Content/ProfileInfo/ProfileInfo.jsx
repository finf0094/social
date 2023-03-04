import s from './profileInfo.module.css'
import userImage from '../../../assets/image/icon-256x256.png'

function ProfileInfo(props) {
    return ( 
        <div className={s.profile}>
            <img src={props.profile.photos.large ? props.profile.photos.large : userImage} alt="profile img" srcset="" width={200} height={200} />
            <div className={s.profileInfo}>
                <h3 className={s.name}>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <p>Ищу работу: {props.profile.lookingForAJob ? 'ИЩУ' : 'НЕ ИЩУ'}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
     );
}

export default ProfileInfo;