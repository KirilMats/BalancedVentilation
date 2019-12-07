import {getUserAuthData} from "./authReducer";

const [INITIALIZATION_SUCCESSFULL] = ['INITIALIZATION_SUCCESSFULL'];

const initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case INITIALIZATION_SUCCESSFULL:
			return {
				...state,
				initialized: true
			}
	}
	return {...state};
}

export const initialize = () => ({type: INITIALIZATION_SUCCESSFULL});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getUserAuthData());
	promise.then(() => dispatch(initialize()) );
}

export default appReducer;