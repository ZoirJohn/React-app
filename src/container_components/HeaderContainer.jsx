import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { setUserData } from '../redux/auth-reducer';
import { headerAPI } from '../api/api';

class HeaderApi extends React.Component {
    componentDidMount() {
        headerAPI.setData().then((response) => {
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
