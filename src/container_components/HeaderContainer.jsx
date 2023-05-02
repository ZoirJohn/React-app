import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout, setData} from '../redux/auth-reducer';

class HeaderApi extends React.Component {
	componentDidMount() {
		this.props.setData();
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.isAuthorized,
	};
};

const HeaderContainer = connect(mapStateToProps, {setData,logout})(HeaderApi);
export default HeaderContainer;
