import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {profile_reducer} from './profile-reducer';
import {messages_reducer} from './messages-reducer';
import {users_redcuer} from './users-reducer';
import {auth_reducer} from './auth-reducer';
import {reducer as form_reducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import {app_reducer} from './app-reducer';

const reducers = combineReducers({
	profilePage: profile_reducer,
	messagesPage: messages_reducer,
	usersPage: users_redcuer,
	auth: auth_reducer,
	form: form_reducer,
	app: app_reducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export {store};
