import { Navigate } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    class RedirectComponent extends Component {
        render() {
            if (this.props.isAuthorized?.login === undefined) return <Navigate to='/login' />;
            return <Component {...this.props} />;
        }
    }
    return RedirectComponent;
};

export default withAuthRedirect;
