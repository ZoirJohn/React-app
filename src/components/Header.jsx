import { Link } from 'react-router-dom';

import styles from '../css/Header.module.css';
import logo from '../img/svg.jpg';

const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <Link to='/'>
                    <img src={logo} alt='' />
                </Link>

                {props.isAuthorized?.login === undefined ? <Link to='/login'>Log In</Link> : <p>Free</p>}
            </div>
        </header>
    );
};

export default Header;
