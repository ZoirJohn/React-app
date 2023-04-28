import {headerAPI} from '../api/api';

const SET_REGISTER = 'SET-REGISTER';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: null,
};

function auth_reducer(state = initialState, action) {
    let stateCopy = {...state};
    if (action.type === SET_REGISTER) {
        return {...stateCopy, isAuthorized: action.data.isRegistered};
    }
    return stateCopy;
}

const setData = () => (dispatch) => {
    headerAPI.setInfo().then((response) => {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setUserData(id, email, login, true));
        }
    });
};
const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.login(email, password, rememberMe).then((response) => {
        // if (response.data.resultCode === 0) {
        //     dispatch(setUserData(response.data.data));
        // }
        dispatch(setData())
    });
};
const logout = () => (dispatch) => {
    headerAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

const setUserData = (id, email, login, isRegistered) => ({type: SET_REGISTER, data: {id, email, login, isRegistered}});

export {auth_reducer, setData, login, logout};
