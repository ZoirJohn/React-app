import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import style from '../css/Message.module.css';

const Name = (props) => {
    let path = `/messages/${props.path}`;
    return (
        <li className='names'>
            <NavLink to={path}>{props.word}</NavLink>
        </li>
    );
};
const Chat = (props) => {
    return <li>{props.text}</li>;
};

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='message_textarea' />
            <button>Send</button>
        </form>
    );
};

const MessagesFormContainer = reduxForm({ form: 'messages' })(MessagesForm);

const Messages = (props) => {
    if (props.auth?.login === undefined) {
        return <Navigate to='/login' />;
    }
    const data = props.data.map((el) => <Name path={el.id} word={el.name} key={el.id} />);
    const message = props.message.map((el) => <Chat text={el.text} key={el.id} />);

    const onSubmit = (data) => {
        console.log(props);
        props.addMessage(data.message_textarea);
    };
    return (
        <section className={style.dialogs}>
            <h1>Messages</h1>
            <ul className={style.names}>{data}</ul>
            <ul className={style.chats}>{message}</ul>
            <MessagesFormContainer onSubmit={onSubmit} />
        </section>
    );
};

export default Messages;
