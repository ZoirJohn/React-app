import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { profile_reducer } from './profile-reducer';
import { messages_reducer } from './messages-reducer';
import { users_redcuer } from './users-reducer';
import { auth_reducer } from './auth-reducer';
import thunkMiddleware  from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: messages_reducer,
    usersPage: users_redcuer,
    auth: auth_reducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export { store };
