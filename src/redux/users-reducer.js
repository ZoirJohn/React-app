import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGES = 'SET_PAGES';
const SET_TOTAL = 'SET_TOTAL';
const SET_FETCH = 'SET_FETCH';
const SET_BUTTON_STATE = 'SET_BUTTON_STATE';

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsers: 0,
    isFetching: false,
    isDisabling: [],
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
    } else if (action.type === SET_BUTTON_STATE) {
        return { ...state, isDisabling: action.buttonState ? [...state.isDisabling, action.userState] : [state.isDisabling.filter((id) => id !== action.userState)] };
    }

    return stateCopy;
}

const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(setFetch(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
        dispatch(setFetch(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotal(24));
    });
};

const followSuccess = (id) => (dispatch) => {
    dispatch(setButton(true, id));
    usersAPI.followUsers(id).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(follow(id));
        }
        dispatch(setButton(false, id));
    });
};

const unfollowSuccess = (id) => (dispatch) => {
    dispatch(setButton(true, id));
    usersAPI.unfollowUsers(id).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(unfollow(id));
        }
        dispatch(setButton(false, id));
    });
};

const follow = (userID) => ({ type: FOLLOW, userID });
const unfollow = (userID) => ({ type: UNFOLLOW, userID });
const setUsers = (consumers) => ({ type: SET_USERS, consumers });
const setPages = (page) => ({ type: SET_PAGES, page });
const setTotal = (total) => ({ type: SET_TOTAL, total });
const setFetch = (fetched) => ({ type: SET_FETCH, fetched });
const setButton = (buttonState, userState) => ({ type: SET_BUTTON_STATE, buttonState, userState });

export { users_redcuer, setPages, followSuccess, unfollowSuccess, getUsersThunk };
