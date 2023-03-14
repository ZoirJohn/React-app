import { profileAPI } from '../api/api';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_STATUS_PROFILE = 'GET-STATUS-PROFILE';

const initialState = {
    message: [
        { text: 'Hello', id: 1 },
        { text: 'Bye', id: 2 },
        { text: 'Watcha you gonna do', id: 3 },
    ],
    post: '',
    status: null,
};

function profile_reducer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === ADD_MESSAGE) {
        stateCopy.message.push({ text: stateCopy.post, id: stateCopy.message.length + 1 });
        stateCopy.post = '';
    } else if (action.type === UPDATE_MESSAGE) {
        stateCopy.post = action.text;
    } else if (action.type === SET_USER_PROFILE) {
        return { ...stateCopy, profile: action.profile };
    } else if (action.type === GET_STATUS_PROFILE) {
        return { ...stateCopy, status: action.status };
    }
    return stateCopy;
}

const setProfile = (userId) => (dispatch) => {
    profileAPI.setProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};

const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(getStatusProfile(response.data));
    });
};

const setStatus = (userId) => (dispatch) => {
    profileAPI.setStatus(userId).then((response) => {
        dispatch(setStatusProfile(response.data));
    });
};

const addPostAction = () => ({ type: ADD_MESSAGE });
const updatePostAction = (text) => ({ type: UPDATE_MESSAGE, text });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const getStatusProfile = (status) => ({ type: GET_STATUS_PROFILE, status });
const setStatusProfile = () => ({ type: GET_STATUS_PROFILE });

export { profile_reducer, addPostAction, updatePostAction, setProfile, getStatus, setStatus };
