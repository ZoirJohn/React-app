const get_isFetching = (state) => {
	return state.usersPage.isFetching;
};
const get_currentPage = (state) => {
	return state.usersPage.currentPage;
};
const get_users = (state) => {
	return state.usersPage.users;
};
const get_pageSize = (state) => {
	return state.usersPage.totalUsers;
};

export {get_isFetching, get_currentPage, get_users, get_pageSize};