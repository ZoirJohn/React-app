import {setData} from './auth-reducer';

const initializing = 'INITIALIZING';
const initialState = {
		initialized: false,
	}
;

function app_reducer(state = initialState) {
	return {...state, initialized: true};
}

const initializing_action = () => ({type: initializing});

const initialize = () => (dispatch) => {
	const setDataInit = dispatch(setData());
	// debugger;
	Promise.all([setDataInit]).then(() => initializing_action());
};


export {app_reducer, initialize};