import { reduxForm } from 'redux-form';
import styles from '../css/Login.module.css';

const Form = () => {
    return (
        <form action='news' className={styles.form}>
            <label htmlFor='email'>
                Email: <input type='email' id='email' />
            </label>

            <label htmlFor='password'>
                Password: <input type='password' id='password' />
            </label>

            <label htmlFor='remember'>
                Remember me: <input type='checkbox' id='remember' />
            </label>

            <button>Login</button>
        </form>
    );
};

const ReduxForm = reduxForm({
    form: 'login',
})(Form);

const Login = () => {
    return (
        <section>
            <h1>Login</h1>
            <ReduxForm />
        </section>
    );
};
export default Login;
