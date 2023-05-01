import {Link} from 'react-router-dom';

import styles from '../css/Header.module.css';
import logo from '../img/svg.jpg';
import {logout} from '../redux/auth-reducer';

const Header = (props) => {
	return (
		<header>
			<div className={styles.container}>
				<Link to="/">
					<img src={logo} alt=""/>
				</Link>
				{props.auth === null ? <Link to="/login">Log In</Link> :
					<p onClick={props.logout} style={{cursor: 'pointer'}}>Log Out</p>}
			</div>
		</header>
	);
};

export default Header;
