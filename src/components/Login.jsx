import {Field, reduxForm} from 'redux-form';
import {Input} from '../ui/Controls';
import styles from '../css/Login.module.css';
import {lengthValidatorCreator, required} from '../tools/validator';
import {connect} from 'react-redux';
import {login} from '../redux/auth-reducer';
import {Navigate} from 'react-router-dom';

const lengthValidator = lengthValidatorCreator(5);

const Form = (props) => {
	console.log(props);
	return (
		<form onSubmit={props.handleSubmit} className={styles.form}>
			<label htmlFor="email_input">
				Email: <Field component={Input} validate={[required, lengthValidator]} type="email" name="email_input"
							  placeholder="Email"/>
			</label>

			<label htmlFor="password_input">
				Password: <Field component={Input} validate={[required, lengthValidator]} type="password"
								 name="password_input" placeholder="Password"/>
			</label>

			<label htmlFor="remember_input" className={styles.checkbox_label}>
				Remember me: <Field component={Input} type="checkbox" name="remember_input"/>
				{
					props.error && <span className={styles._error}>
										{props.error}
									</span>
				}

			</label>

			<button>Login</button>
		</form>
	);
};

const ReduxForm = reduxForm({
	form: 'login',
})(Form);


const Login = (props) => {
	if (props.auth === true) {
		return <Navigate to="/profile"/>;
	}
	const onSubmit = (data) => {
		props.login(data.email_input, data.password_input, data.remember_input);
	};
	return (
		<section>
			<h1>Login</h1>
			<ReduxForm onSubmit={onSubmit}/>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.isAuthorized,
	};
};
const LoginContainer = connect(mapStateToProps, {login})(Login);

export default LoginContainer;
