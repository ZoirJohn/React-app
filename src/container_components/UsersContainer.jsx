import { connect } from 'react-redux';
import React from 'react';
import { follow, unfollow, setUsers, setPages, setTotal, setFetch, setButton } from '../redux/users-reducer';
import Users from '../components/Users';
import { usersAPI } from '../api/api';

// ! Component
class UsersApi extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            this.props.setFetch(true);
            // ! // Api request // ! //
            usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((response) => {
                this.props.setFetch(false);
                this.props.setUsers(response.data.items);
                this.props.setTotal(24);
            });
        }
    }
    onPageChange = (pageNumber) => {
        this.props.setPages(pageNumber);
        this.props.setFetch(true);
        // ! // Api request // ! //
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize).then((response) => {
            this.props.setFetch(false);
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        const counter = Math.ceil(this.props.usersPage.totalUsers / this.props.usersPage.pageSize);

        let pages = [];
        for (let i = 1; i <= counter; i++) {
            pages.push(i);
        }

        return <Users usersPage={this.props.usersPage} pages={pages} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow} setButton={setButton} />;
    }
}

const mapStateToProps = (state) => {
    return { usersPage: state.usersPage };
};

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPages,
    setTotal,
    setFetch,
    setButton,
})(UsersApi);

export default UsersContainer;
