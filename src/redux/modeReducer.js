import {modeAPI} from '../api/api';
import {setElementsData} from "./systemDataReducer";

const [TOGGLE_AUTO_MODE, TOGGLE_SWITCH, TOGGLE_PERIOD, TOGGLE_FAN_BAR, SET_MODE_DATA] = ['TOGGLE_AUTO_MODE', 'TOGGLE_SWITCH', 'TOGGLE_PERIOD', 'TOGGLE_FAN_BAR', 'SET_MODE_DATA'];

let initialState = {
	isFanBarShown: false,
	isAutoModeOn: false,
	isSystemOn: true,
	isWinterPeriod: true
}

const modeReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_AUTO_MODE:
			return {
				...state,
				isAutoModeOn: action.isAutoModeOn
			}
		case TOGGLE_FAN_BAR:
			return {
				...state,
				isFanBarShown: action.isFanBarShown
			}
		case TOGGLE_SWITCH:
			return {
				...state,
				isSystemOn: action.isSystemOn
			}
		case TOGGLE_PERIOD:
			return  {
				...state,
				isWinterPeriod: action.isWinterPeriod
			}
		case SET_MODE_DATA:
			return {
				...state,
				...action.modeData
			}
		default: return state;
	}
}

//ACTIONS
export const toggleAutoMode = (isAutoModeOn) => ({type: TOGGLE_AUTO_MODE, isAutoModeOn});
export const toggleFanBar = (isFanBarShown) => ({type: TOGGLE_FAN_BAR, isFanBarShown});
export const toggleSwitch = (isSystemOn) => ({type: TOGGLE_SWITCH, isSystemOn});
export const togglePeriod = (isWinterPeriod) => ({type: TOGGLE_PERIOD, isWinterPeriod});
export const setModeData = (modeData) => ({type: SET_MODE_DATA, modeData});
//THUNKS
export const updatePeriod = (isWinterPeriod) => (dispatch) => {
	modeAPI.updatePeriod(isWinterPeriod).then( data => {
		if(data.resultCode === 0) {
				dispatch(togglePeriod(isWinterPeriod));
		}
	})
}

export const updateSystemState = (isSystemOn) => (dispatch) => {
	modeAPI.updateSystemState(isSystemOn).then( data => {
		if(data.resultCode === 0) {
				dispatch(toggleSwitch(isSystemOn));
		}
	})
}

export const updateAutoMode = (isAutoModeOn) => (dispatch) => {
	modeAPI.updateAutoMode(isAutoModeOn).then( data => {
		if(data.resultCode === 0) {
				dispatch(toggleAutoMode(isAutoModeOn));
		}
	})
}

export const getModeData = () => (dispatch) => {
	modeAPI.getModeData().then(data => {
		if(data.resultCode === 0) {
			dispatch(setModeData(data));
		}
	})
}

// export const updateMode = (mode, value) => (dispatch) => {
// 	modeAPI.updateMode(mode,value).then(data => {
// 		if(data.resultCode === 0) {
// 			dispatch(toggleMode(mode, value));
// 		}
// 	})
// }

export default modeReducer;