import {Link} from 'react-router-dom';

import styles from '../css/Header.module.css';
import logo from '../img/svg.jpg';

const Header = (props) => {
	return (
		<header>
			<div className={styles.container}>
				<Link to="/">
					<img src={logo} alt=""/>
				</Link>
				{props.auth === null || props.auth === false ? <Link to="/login">Log In</Link> :
					<p onClick={props.logout} style={{cursor: 'pointer'}}>Log Out</p>}
			</div>
		</header>
	);
};

export default Header;
