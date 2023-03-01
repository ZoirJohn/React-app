import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from '../components/Profile';
import { setUserProfile } from '../redux/profile-reducer';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} />;
    }
}

// ! With Router (2)
const ProfileRouter = withRouter(ProfileApi);

// * Redux
const mapStateToProps = (state) => {
    return { profilePage: state.profilePage };
};
const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileRouter);

export default ProfileContainer;
