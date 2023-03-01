import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from '../css/Users.module.css';
import photo from '../img/photo.png';
import Preloader from '../ui/Loader';

const Users = (props) => {
    return (
        <section className={styles.users}>
            {props.usersPage.isFetching ? <Preloader /> : ''}

            <h1>Users</h1>
            <div className={styles.user__buttons}>
                {props.pages.map((number) => (
                    <button key={number} onClick={() => props.onPageChange(number)} className={props.usersPage.currentPage === number ? styles.active : styles.passive}>
                        {number}
                    </button>
                ))}
            </div>
            <ul>
                {props.usersPage.users.map((user) => (
                    <li key={user.id} className={styles.user__card}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small ? user.photos.small : photo} alt='' />
                        </NavLink>

                        <div className={styles.user__information}>
                            {user.name}
                            {user.isFollowed ? (
                                <button
                                    onClick={() =>
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers: { 'API-KEY': '16f271c5-8f1c-432e-a003-3d5a04b48c40' } }).then((response) => {
                                            if (response.data.resultCode == 0) props.unfollow(user.id);
                                        })
                                    }
                                >
                                    Followed
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true, headers: { 'API-KEY': '16f271c5-8f1c-432e-a003-3d5a04b48c40' } }).then((response) => {
                                            if (response.data.resultCode == 0) props.follow(user.id);
                                        })
                                    }
                                >
                                    Unfollowed
                                </button>
                            )}
                            {/* {user.isFollowed ? <button onClick={() => props.unfollow(user.id) }>Followed</button> : <button onClick={() => props.follow(user.id)}>Unfollowed</button>} */}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Users;
