import {headerAPI} from '../api/api';

const SET_REGISTER = 'SET-REGISTER';

const initialState = {
     email: null, login: null, isAuthorized: null,
};

function auth_reducer(state = initialState, action) {
    let stateCopy = {...state};
    if (action.type === SET_REGISTER) {
        return {...stateCopy, ...action.data};
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
const login = (email, password, remember) => (dispatch) => {
    headerAPI.login(email, password).then((response) => {
        if (response.data.resultCode === 0) {
            console.log(response);
            dispatch(setData());
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

const setUserData = (id, email, login, isAuthorized) => ({type: SET_REGISTER, data: {id, email, login, isAuthorized}});

export {auth_reducer, setData, login, logout};
