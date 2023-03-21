import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from '../css/Login.module.css';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <label htmlFor='email_input'>
                Email: <Field component='input' type='email' name='email_input' placeholder='Email' />
            </label>

            <label htmlFor='password_input'>
                Password: <Field component='input' type='password' name='password_input' placeholder='Password' />
            </label>

            <label htmlFor='remember_input' className={styles.checkbox_label}>
                Remember me: <Field component='input' type='checkbox' name='remember_input' />
            </label>

            <button>Login</button>
        </form>
    );
};

const ReduxForm = reduxForm({
    form: 'login',
})(Form);

const Login = () => {
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section>
            <h1>Login</h1>
            <ReduxForm onSubmit={onSubmit} />
        </section>
    );
};
export default Login;
