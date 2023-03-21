import Post from './Post';
import styles from '../css/Posts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <label>My posts</label>
            <Field component='textarea' name='post_textarea' placeholder='Введите текст' />

            <button>Send</button>
        </form>
    );
};

const PostsFormContainer = reduxForm({
    form: 'posts',
})(PostsForm);

const Posts = (props) => {
    const onSubmit = (data) => {
        props.addPost(data.post_textarea);
    };
    return (
        <section className={styles.section__post}>
            <PostsFormContainer addPost={props.addPost} updatePost={props.updatePost} onSubmit={onSubmit} />

            <div className={styles.posts_box}>
                {props.message.map((e) => (
                    <Post message={e.text} key={e.id} />
                ))}
            </div>
        </section>
    );
};
export default Posts;
