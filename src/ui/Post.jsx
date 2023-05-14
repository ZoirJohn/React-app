import styles from '../css/Posts.module.css';
import profilePhoto from '../img/dev.webp';

const PostSmall = (props) => {
   return (
      <div className={styles.posts__card}>
         <img src={profilePhoto} alt='' />
         <p className={styles.post__text}>{props.message}</p>
      </div>
   );
};

export default PostSmall;
