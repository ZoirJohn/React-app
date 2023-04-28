import {reduxForm} from 'redux-form';
import {Field} from 'redux-form';
import {Input} from '../ui/Controls';
import styles from '../css/Login.module.css';
import {lengthValidatorCreator, required} from '../tools/validator';
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";

const lengthValidator = lengthValidatorCreator(10);

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <label htmlFor='email_input'>
                Email: <Field component={Input} validate={[required, lengthValidator]} type='email' name='email_input'
                              placeholder='Email'/>
            </label>

            <label htmlFor='password_input'>
                Password: <Field component={Input} validate={[required, lengthValidator]} type='password'
                                 name='password_input' placeholder='Password'/>
            </label>

            <label htmlFor='remember_input' className={styles.checkbox_label}>
                Remember me: <Field component={Input} type='checkbox' name='remember_input'/>
            </label>

            <button>Login</button>
        </form>
    );
};

const ReduxForm = reduxForm({
    form: 'login',
})(Form);


const Login = (props) => {
    const onSubmit = (data) => {
        // console.log(props.login);
        props.login(data.email_input, data.password_input, data.remember_input)
    };
    return (
        <section>
            <h1>Login</h1>
            <ReduxForm onSubmit={onSubmit}/>
        </section>
    );
};

const LoginContainer = connect(null, {login})(Login);

export default LoginContainer;
