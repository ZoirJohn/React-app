import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { setUserData } from '../redux/auth-reducer';

class HeaderApi extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then((response) => {
            this.props.setUserData(response.data.data);
        });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
    };
};

const HeaderContainer = connect(mapStateToProps, { setUserData })(HeaderApi);
export default HeaderContainer;
