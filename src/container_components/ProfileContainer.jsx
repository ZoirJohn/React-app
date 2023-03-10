import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import { setProfile } from '../redux/profile-reducer';
import { redirect } from 'react-router-dom';

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
    }
    render() {
        if (this.props.auth === false) {
            return redirect('/login');
        }
        return <Profile {...this.props} />;
    }
}

// ! With Router (2)
const ProfileRouter = withRouter(ProfileApi);

// * Redux
const mapStateToProps = (state) => {
    return { profilePage: state.profilePage, auth: state.auth.isAuthorized };
};
const ProfileContainer = connect(mapStateToProps, { setProfile })(ProfileRouter);

export default ProfileContainer;
