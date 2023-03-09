import { profileAPI } from '../api/api';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    message: [
        { text: 'Hello', id: 1 },
        { text: 'Bye', id: 2 },
        { text: 'Watcha you gonna do', id: 3 },
    ],
    post: '',
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
    }
    return stateCopy;
}

const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    };
};

const addPostAction = () => ({ type: ADD_MESSAGE });
const updatePostAction = (text) => ({ type: UPDATE_MESSAGE, text });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export { profile_reducer, addPostAction, updatePostAction, setProfile };
