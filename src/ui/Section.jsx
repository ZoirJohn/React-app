import { useState } from 'react';
import img from '../img/background.webp';
import dev from '../img/photo.png';

const ProfileSection = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [word, setWord] = useState('Good Death');
    console.log(props);
    if (props.status === null) {
        props.getStatus(props.profile.userId);
    }
    const putStatus = () => {
        setEditMode(false);
    };
    return (
        <section className='profile'>
            <img src={img} alt='background' />
            <div className='card'>
                <img src={props.profile.photos.large || dev} alt='profileImage' />
                <div className=' card-text'>
                    <p className='card-name'>{props.profile.fullName}</p>
                    <p className='card-birthday'>Date of birth: 1998</p>
                    <p className='card-city'>City: Minsk</p>
                    <p className='card-education'>Education: BSU'11 </p>
                    <p>
                        Web-site:{' '}
                        <a className='card-site' href='https://github.com' target='_blank'>
                            https://github.com
                        </a>
                    </p>
                    {editMode ? (
                        <input className='card-status' type='text' value={word} autoFocus={true} onDoubleClick={() => putStatus()} onChange={(e) => setWord(e.target.value)} />
                    ) : (
                        <p className='card-status' onClick={() => setEditMode(true)}>
                            Status: {props.status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
