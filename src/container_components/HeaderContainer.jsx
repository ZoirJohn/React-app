import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { setData } from '../redux/auth-reducer';

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
        isAuthorized: state.auth.isAuthorized,
    };
};

const HeaderContainer = connect(mapStateToProps, { setData })(HeaderApi);
export default HeaderContainer;
