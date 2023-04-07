import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log(this.props);
            if (this.props.auth === undefined) return <Navigate to='/login' />;
            return <Component {...this.props} />;
        }
    }
    return RedirectComponent;
};

export default withAuthRedirect;
