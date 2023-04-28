import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import Profile from '../components/Profile';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { setProfile, getStatus, updateStatus } from '../redux/profile-reducer';

// ! With Router (1)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}

// ! Profile Api
class ProfileApi extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile {...this.props} />;
    }
}

// ! With Router (2)

// * Redux
const mapStateToProps = (state) => {
    return { profilePage: state.profilePage, auth: state.auth.isAuthorized };
};

const ProfileContainer = compose(connect(mapStateToProps, { setProfile, getStatus  }), withRouter, withAuthRedirect)(ProfileApi);

export default ProfileContainer;
