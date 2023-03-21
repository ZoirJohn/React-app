import { profileAPI } from '../api/api';

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE';

const initialState = {
    message: [
        { text: 'Hello', id: 1 },
        { text: 'Bye', id: 2 },
        { text: 'Watcha you gonna do', id: 3 },
    ],
    status: null,
};

function profile_reducer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === ADD_MESSAGE) {
        stateCopy.message.push({ text: action.text, id: stateCopy.message.length + 1 });
    } else if (action.type === SET_USER_PROFILE) {
        return { ...stateCopy, profile: action.profile };
    } else if (action.type === SET_STATUS_PROFILE) {
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
        dispatch(setStatusProfile(response.data));
    });
};

const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) dispatch(setStatusProfile(status));
    });
};

const addPostAction = (text) => ({ type: ADD_MESSAGE, text });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status });

export { profile_reducer, addPostAction, setProfile, getStatus, updateStatus };
