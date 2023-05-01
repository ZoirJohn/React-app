import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

const MusicNavigate = (props) => {
	if (props.auth === null) {
		return <Navigate to="/login"/>;
	}
	return <section className="music"><h1>Music</h1></section>;
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.isRegistered,
	};
};

const Music = connect(mapStateToProps, null)(MusicNavigate);

export default Music;