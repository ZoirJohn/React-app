import React from 'react';
import {NavLink} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../ui/Controls';
import styles from '../css/Message.module.css';
import {lengthValidatorCreator, required} from '../tools/validator';

const lengthValidator = lengthValidatorCreator(10);

const Name = (props) => {
	let path = `/messages/${props.path}`;
	return (
		<li className="names">
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
			<Field component={Textarea} name="message_textarea" validate={[required, lengthValidator]}/>
			<button>Send</button>
		</form>
	);
};

const MessagesFormContainer = reduxForm({form: 'messages'})(MessagesForm);

const Messages = (props) => {
	const data = props.data.map((el) => <Name path={el.id} word={el.name} key={el.id}/>);
	const message = props.message.map((el) => <Chat text={el.text} key={el.id}/>);

	const onSubmit = (data) => {
		props.addMessage(data.message_textarea);
	};
	return (
		<section className={styles.dialogs}>
			<h1>Messages</h1>
			<ul className={styles.names}>{data}</ul>
			<ul className={styles.chats}>{message}</ul>
			<MessagesFormContainer onSubmit={onSubmit}/>
		</section>
	);
};

export default Messages;
