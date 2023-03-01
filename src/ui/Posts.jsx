import Post from './Post';
import styles from '../css/Posts.module.css';
import React from 'react';

const Posts = (props) => {
   let text = React.createRef();

   const addText = () => {
      props.addPost();
   };

   const addOnChangePost = () => {
      props.updatePost(text.current.value);
   };

   return (
      <section className={styles.section__post}>
         <div className={styles.form}>
            <label>My posts</label>
            <textarea placeholder='Введите текст' onChange={addOnChangePost} value={props.post} ref={text}></textarea>

            <button onClick={addText}>Send</button>
         </div>

         <div className={styles.posts_box}>
            {props.message.map((e) => (
               <Post message={e.text} key={e.id} />
            ))}
         </div>
      </section>
   );
};
export default Posts;
