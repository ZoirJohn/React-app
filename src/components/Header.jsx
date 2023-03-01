import { Link } from 'react-router-dom';

import styles from '../css/Header.module.css';
import logo from '../img/svg.jpg';

const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <Link to='/profile'>
                    <img src={logo} alt='' />
                </Link>

                {props.isAuthorized === false ? <Link to='/register'>Log In</Link> : <p>Free</p>}
            </div>
        </header>
    );
};

export default Header;
