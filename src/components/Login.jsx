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

//https://p2-187.pvvstream.pro/pj9HAjVVrcaj5C5cTgmXsQ/-171718843_456240292/720/vkvd205.mycdn.me/?srcIp=185.213.88.106&pr=40&expires=1679683629159&srcAg=STAGEFRIGHT&fromCache=1&ms=45.136.21.204&type=3&sig=KvEccHhKgUA&ct=0&urls=185.226.53.171&clientType=13&appId=512000384397&zs=12&id=2397242657284play&d
