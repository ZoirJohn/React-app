const initializing = 'INITIALIZING';
const initialState = {
		initialized: false,
	}
;

function app_reducer(state = initialState) {
	return {...state, initialized: true};
}

const initializing_action = () => ({type: initializing});

export default app_reducer;