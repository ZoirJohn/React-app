import React from 'react';
import {Navigate} from 'react-router-dom';

const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.auth === null || this.props.auth === false) return <Navigate to="/login"/>;
			return <Component {...this.props} />;
		}
	}

	return RedirectComponent;
};

export default withAuthRedirect;
