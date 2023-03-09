import { headerAPI } from '../api/api';

const SET_REGISTER = 'SET-REGISTER';

const initialState = {
    isAuthorized: null,
};

function auth_reducer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === SET_REGISTER) {
        return { ...stateCopy, isAuthorized: action.isRegistered };
    }
    return stateCopy;
}

const setData = () => {
    return (dispatch) => {
        headerAPI.setData().then((response) => {
            dispatch(setUserData(response.data.data));
        });
    };
};

const setUserData = (isRegistered) => ({ type: SET_REGISTER, isRegistered });

export { auth_reducer, setData };
