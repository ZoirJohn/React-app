const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGES = 'SET_PAGES';
const SET_TOTAL = 'SET_TOTAL';
const SET_FETCH = 'SET_FETCH';

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsers: 0,
    isFetching: false,
};

function users_redcuer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === FOLLOW) {
        stateCopy.users.map((user) => {
            if (user.id === action.userID) {
                return (user.isFollowed = true);
            }
        });
    } else if (action.type === UNFOLLOW) {
        stateCopy.users.map((user) => {
            if (user.id === action.userID) {
                return (user.isFollowed = false);
            }
        });
    } else if (action.type === SET_USERS) {
        return { ...state, users: action.consumers };
    } else if (action.type === SET_PAGES) {
        return { ...state, currentPage: action.page };
    } else if (action.type === SET_TOTAL) {
        return { ...state, totalUsers: action.total };
    } else if (action.type === SET_FETCH) {
        return { ...state, isFetching: action.fetched };
    }

    return stateCopy;
}

const follow = (userID) => ({ type: FOLLOW, userID });
const unfollow = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (consumers) => ({ type: SET_USERS, consumers });
const setPages = (page) => ({ type: SET_PAGES, page });
const setTotal = (total) => ({ type: SET_TOTAL, total });
const setFetch = (fetched) => ({ type: SET_FETCH, fetched });

export { users_redcuer, follow, unfollow, setUsers, setPages, setTotal, setFetch };
