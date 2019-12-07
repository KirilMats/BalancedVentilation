import contentAPI from '../api/api';

const [TOGGLE_PRELOADER] = ['TOGGLE_PRELOADER'];

let initialState = {
	isFetching: true
}

const contentReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_PRELOADER:
			return {
				...state,
				isFetching: action.isFetching
			}
		default: return state;
	}
}

//ACTIONS
export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});

//THUNKS

export default contentReducer;