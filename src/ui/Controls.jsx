import styles from '../css/Tools.module.css';

const Controller = ({ input, meta, customName, ...props }) => {
    const error = meta.touched && meta.error;
    return (
        <div className={styles.text_area__parent}>
            {customName === 'textarea' ? <textarea {...input} {...props} className={`${styles.text_area} ${error ? styles.error : ''}`}></textarea> : <input {...input} {...props} className={`${styles.text_area} ${error ? styles.error : ''}`} />}
            <span className={styles.error__text}>{error}</span>
        </div>
    );
};
const Textarea = (props) => {
    return <Controller {...props} customName='textarea' />;
};
const Input = (props) => {
    return <Controller {...props} customName='input' />;
};
export { Textarea, Input };
