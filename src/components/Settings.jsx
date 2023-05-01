import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

const SettingsNavigate = (props) => {
	if (props.auth === null) {
		return <Navigate to="/login"/>;
	}
	return <section className="settings"><h1>Settings</h1></section>;
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.isRegistered,
	};
};

const Settings = connect(mapStateToProps, null)(SettingsNavigate);

export default Settings;