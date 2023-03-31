import { headerAPI } from '../api/api';

const SET_REGISTER = 'SET-REGISTER';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: null,
};

function auth_reducer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === SET_REGISTER) {
        return { ...stateCopy, isAuthorized: action.isRegistered };
    }
    return stateCopy;
}

const setData = () => (dispatch) => {
    headerAPI.setData().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(response.data.data));
        }
    });
};
const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData());
        }
    });
};
const logout = () => (dispatch) => {
    headerAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

const setUserData = (isRegistered) => ({ type: SET_REGISTER, userId, email, login, isRegistered });

export { auth_reducer, setData };
