import styles from '../css/Tools.module.css';

const Textarea = ({ input, meta, ...props }) => {
    return <textarea {...input} {...props} className={styles.text_area}></textarea>;
};
export default Textarea;
