import styles from '../css/Tools.module.css';

const Textarea = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;
    return (
        <div className={styles.text_area__parent}>
            <textarea {...input} {...props} className={`${styles.text_area} ${error ? styles.error : ''}`}></textarea>
            <span className={styles.error__text}>{error}</span>
        </div>
    );
};
export default Textarea;
