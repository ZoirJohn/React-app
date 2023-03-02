import { NavLink } from 'react-router-dom';
import { usersAPI } from '../api/api';
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
                                    disabled={props.usersPage.isDisabling}
                                    onClick={() =>
                                        usersAPI.unfollowUsers(user.id).then((response) => {
                                            if (response.data.resultCode == 0) props.unfollow(user.id);
                                        })
                                    }
                                >
                                    Followed
                                </button>
                            ) : (
                                <button
                                    disabled={props.usersPage.isDisabling}
                                    onClick={() =>
                                        usersAPI.followUsers(user.id).then((response) => {
                                            if (response.data.resultCode == 0) props.follow(user.id);
                                        })
                                    }
                                >
                                    Unfollowed
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Users;
