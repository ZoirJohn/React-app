import React from 'react';
import Users from '../components/Users';
import {connect} from 'react-redux';
import {followSuccess, getUsersThunk, setPages, unfollowSuccess} from '../redux/users-reducer';
import {compose} from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';

class UsersApi extends React.Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
	}

	onPageChange = (pageNumber) => {
		this.props.setPages(pageNumber);
		this.props.getUsersThunk(pageNumber, this.props.usersPage.pageSize);
	};

	render() {
		const counter = Math.ceil(this.props.usersPage.totalUsers / this.props.usersPage.pageSize);

		let pages = [];
		for (let i = 1; i <= counter; i++) {
			pages.push(i);
		}

		return <Users usersPage={this.props.usersPage} pages={pages} onPageChange={this.onPageChange}
					  followSuccess={this.props.followSuccess} unfollowSuccess={this.props.unfollowSuccess}
					  setButton={this.props.setButton}/>;
	}
}

const mapStateToProps = (state) => {
	return {usersPage: state.usersPage, auth: state.auth.isAuthorized};
};

const UsersContainer = compose(
	connect(mapStateToProps, {
		setPages,
		followSuccess,
		unfollowSuccess,
		getUsersThunk,
	}),
	withAuthRedirect)(UsersApi);

export default UsersContainer;
