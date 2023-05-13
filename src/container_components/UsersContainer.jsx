import React from 'react';
import Users from '../components/Users';
import {connect} from 'react-redux';
import {followSuccess, getUsersThunk, setPages, unfollowSuccess} from '../redux/users-reducer';
import {compose} from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import {
	get_currentPage,
	get_isDisabling,
	get_isFetching,
	get_pageSize,
	get_totalUsers,
	get_users,
} from '../redux/users-selectors';

class UsersApi extends React.Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	onPageChange = (pageNumber) => {
		this.props.setPages(pageNumber);
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	};

	render() {
		const counter = Math.ceil(this.props.totalUsers / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= counter; i++) {
			pages.push(i);
		}

		return <Users pages={pages} onPageChange={this.onPageChange} isFetching={this.props.isFetching}
					  currentPage={this.props.currentPage} users={this.props.users} isDisabling={this.props.isDisabling}
					  followSuccess={this.props.followSuccess} unfollowSuccess={this.props.unfollowSuccess}
					  setButton={this.props.setButton}/>;
	}
}

const mapStateToProps = (state) => {
	return {
		isFetching: get_isFetching(state),
		currentPage: get_currentPage(state),
		users: get_users(state),
		pageSize: get_pageSize(state),
		totalUsers: get_totalUsers(state),
		isDisabling: get_isDisabling(state),
	};
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
