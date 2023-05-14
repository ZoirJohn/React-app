import axios from 'axios';
import styles from '../css/Users.module.css';

import photo from '../img/photo.png';

const Users = (props) => {
   const getUsers = () => {
      if (props.usersPage.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items);
         });
      }
   };

   getUsers();

   return (
		<section className={styles.users}>
         <ul>
            {props.usersPage.users.map((user) => (
               <li key={user.id} className={styles.user__card}>
                  <img src={user.photos === true ? user.photos : photo} alt='' />
                  <div className={styles.user__information}>
                     {user.name}
                     {user.isFollowed ? <button onClick={() => props.unfollow(user.id)}>Followed</button> : <button onClick={() => props.follow(user.id)}>Unfollowed</button>}
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Users;
