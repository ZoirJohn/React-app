import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import { follow, unfollow, setUsers, setPages, setTotal, setFetch } from '../redux/users-reducer';
import Users from '../components/Users';

const mapStateToProps = (state) => {
    return { usersPage: state.usersPage };
};

// ! Component
class UsersApi extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            this.props.setFetch(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`, { withCredentials: true }).then((response) => {
                this.props.setFetch(false);
                this.props.setUsers(response.data.items);
                this.props.setTotal(24);
            });
        }
    }
    onPageChange = (pageNumber) => {
        this.props.setPages(pageNumber);
        this.props.setFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`, { withCredentials: true }).then((response) => {
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

        return <Users usersPage={this.props.usersPage} pages={pages} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow} />;
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPages,
    setTotal,
    setFetch,
})(UsersApi);

export default UsersContainer;
