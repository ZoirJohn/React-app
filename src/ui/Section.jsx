import { useState } from 'react';
import img from '../img/background.webp';
import dev from '../img/photo.png';

const ProfileSection = (props) => {
    let status = props.status;
    let [editMode, setEditMode] = useState(false);
    let [word, setWord] = useState(status);

    const putStatus = (e) => {
        setEditMode(false);
        props.updateStatus(e.target.value);
    };

    const setStatus = () => {
        setEditMode(true);
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
                        <input className='card-status' type='text' value={word} autoFocus={true} onDoubleClick={(e) => putStatus(e)} onChange={(e) => setWord(e.target.value)} />
                    ) : (
                        <p className='card-status' onClick={setStatus}>
                            Status: {props.status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
