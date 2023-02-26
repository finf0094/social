import s from './profileInfo.module.css'


function ProfileInfo() {
    return ( 
        <div className={s.profile}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile img" srcset="" width={200} height={200} />
            <div className={s.profileInfo}>
                <h3 className={s.name}>Askhat K.</h3>
                <p>Data of Birthday: 16.12.2004</p>
                <p>City: Atyrau best city in the worllddddddd</p>
                <p>Education: PSVK is the worst college in the world</p>
                <p>About me: I'm a best man in the world i'm a SENIOR Developer</p>
            </div>
        </div>
     );
}

export default ProfileInfo;