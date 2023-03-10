import React from 'react';
import { NavLink } from 'react-router-dom';
import { redirect } from 'react-router-dom';
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

const Messages = (props) => {
    if (props.auth === false) {
        return redirect('/login');
    }
    const data = props.data.map((el) => <Name path={el.id} word={el.name} key={el.id} />);
    const message = props.message.map((el) => <Chat text={el.text} key={el.id} />);
    const text = React.createRef();

    const addMessageLocal = () => {
        props.addMessage();
    };

    const updateMessageLocal = () => {
        props.updateMessage(text.current.value);
    };
    return (
        <section className={style.dialogs}>
            <h1>Messages</h1>
            <ul className={style.names}>{data}</ul>

            <ul className={style.chats}>{message}</ul>

            <textarea ref={text} onChange={updateMessageLocal} value={props.post}></textarea>
            <button onClick={addMessageLocal}>Send</button>
        </section>
    );
};

export default Messages;
