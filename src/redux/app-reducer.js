import {setData} from './auth-reducer';

const INITIALIZING = 'INITIALIZING';
const initialState = {
		initialized: false,
	}
;

function app_reducer(state = initialState, action) {
	if (action.type === INITIALIZING) {
		return {...state, initialized: true};
	}
	return {...state};
}

const initializing_action = () => ({type: INITIALIZING});

const initialize = () => (dispatch) => {
	const setDataInit = dispatch(setData());
	Promise.all([setDataInit]).then(() => {
		dispatch(initializing_action());
	});
};


export {app_reducer, initialize};