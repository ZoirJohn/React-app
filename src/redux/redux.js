import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { profile_reducer } from './profile-reducer';
import { messages_reducer } from './messages-reducer';
import { users_redcuer } from './users-reducer';
import { auth_reducer } from './auth-reducer';

const reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: messages_reducer,
    usersPage: users_redcuer,
    auth: auth_reducer,
});

const store = legacy_createStore(reducers,applyMiddleware());

window.store = store;

export { store };
