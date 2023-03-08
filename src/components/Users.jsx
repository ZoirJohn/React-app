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
                                    disabled={props.usersPage.isDisabling.some((id) => id === user.id)}
                                    onClick={() => {
                                        props.unfollowSuccess(user.id);
                                    }}
                                >
                                    Followed
                                </button>
                            ) : (
                                <button
                                    disabled={props.usersPage.isDisabling.some((id) => id === user.id)}
                                    onClick={() => {
                                        props.followSuccess(user.id);
                                    }}
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

// const follow = (userID) => ({ type: FOLLOW, userID });
// const unfollow = (userID) => ({ type: UNFOLLOW, userID });
// const setUsers = (consumers) => ({ type: SET_USERS, consumers });
// const setPages = (page) => ({ type: SET_PAGES, page });
// const setTotal = (total) => ({ type: SET_TOTAL, total });
// const setFetch = (fetched) => ({ type: SET_FETCH, fetched });
// const setButton = (buttonState, userState) => ({ type: SET_BUTTON_STATE, buttonState, userState });
