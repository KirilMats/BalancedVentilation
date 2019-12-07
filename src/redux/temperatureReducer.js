import {temperatureAPI} from "../api/api";

const [SET_CURRENT_TEMPERATURE, SET_WANTED_TEMPERATURE] = ['SET_CURRENT_TEMPERATURE', 'SET_WANTED_TEMPERATURE'];

let initialState = {
	currentTemperature: 22,
	wantedTemperature: 24
}

const temperatureReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_TEMPERATURE:
			return {...state, currentTemperature: action.currentTemperature}
		case SET_WANTED_TEMPERATURE:
			return {...state, wantedTemperature: action.wantedTemperature}
		default: return state;
	}
}

export const setCurrentTemperature = (currentTemperature) => ({type: SET_CURRENT_TEMPERATURE, currentTemperature});
export const setWantedTemperature = (wantedTemperature) => ({type: SET_WANTED_TEMPERATURE, wantedTemperature});

export const updateWantedTemperature = (wantedTemperature) => (dispatch) => {
	temperatureAPI.updateWantedTemperature(wantedTemperature).then(data => {
		if(data.resultCode === 0) {
			dispatch(setWantedTemperature(wantedTemperature));
		}
	})
}

export const getWantedTemperature = () => (dispatch) => {
	temperatureAPI.getWantedTemperature().then(data => {
		if(data.resultCode === 0) {
			dispatch(setWantedTemperature(data));
		}
	})
}

export const getCurrentTemperature = () => (dispatch) => {
	temperatureAPI.getCurrentTemperature().then(data => {
		if(data.resultCode === 0) {
			dispatch(setCurrentTemperature(data));
		}
	})
}

export default temperatureReducer;