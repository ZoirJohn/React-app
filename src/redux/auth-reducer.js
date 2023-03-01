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

const setUserData = (isRegistered) => ({ type: SET_REGISTER, isRegistered });

export { auth_reducer, setUserData };
