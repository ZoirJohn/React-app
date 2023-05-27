import PostSmall from './Post';
import styles from '../css/Posts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { lengthValidatorCreator, required } from '../tools/validator';
import { Textarea } from './Controls';

const lengthValidator = lengthValidatorCreator(10);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <label>My posts</label>
            <Field component={Textarea} name='post_textarea' placeholder='Введите текст' validate={[required, lengthValidator]} />

            <button type='submit'>Send</button>
        </form>
    );
};

const PostsFormContainer = reduxForm({
    form: 'posts',
})(PostsForm);

const Posts = React.memo((props) => {
    const onSubmit = (data) => {
        props.addPost(data.post_textarea);
    };
    console.log(props.message);
    return (
        <section className={styles.section__post}>
            <PostsFormContainer onSubmit={onSubmit} />

            <div className={styles.posts_box}>
                {props.message.map((e) => (
                    <PostSmall message={e.text} key={e.id} />
                ))}
            </div>
        </section>
    );
});

export default Posts;
