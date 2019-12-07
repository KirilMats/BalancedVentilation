import {elementStatusAPI} from '../api/api';

const [TOGGLE_ELEMENT, SET_ELEMENTS_DATA] = ['TOGGLE_ELEMENT', 'SET_ELEMENTS_DATA'];

let initialState = {
	isExhaustFanOn: false,
	isSupplyFanOn: false,
	isExhaustAirValveOpened: false,
	isSupplyAirValveOpened: false,
	isCoolerOn: false,
	isHeaterOn: false,
	isFilterOk: true,
	isExhaustFanOk: true,
	isSupplyFanOk: true,
	isCoolerOk: true,
	isHeaterOk: true,
	isExhaustAirValveOk: true,
	isSupplyAirValveOk: true
}

const modeReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_ELEMENT:
			if(action.element === 'exhaustFan') {
				return {
					...state,
					isExhaustFanOn: action.status
				}
			}else if(action.element === 'supplyFan') {
				return {
					...state,
					isSupplyFanOn: action.status
				}
			}else if(action.element === 'exhaustAirValve') {
				return {
					...state,
					isExhaustAirValveOpened: action.status
				}
			}else if(action.element === 'supplyAirValve') {
				return {
					...state,
					isSupplyAirValveOpened: action.status
				}
			}else if(action.element === 'cool') {
				return {
					...state,
					isCoolerOn: action.status
				}
			}else if(action.element === 'heat') {
				return {
					...state,
					isHeaterOn: action.status
				}
			}
		case SET_ELEMENTS_DATA:
			return {
				...state,
				...action.elementsData
			}
		default: return state;
	}
}

//ACTIONS
export const toggleElement = (element, status) => ({type: TOGGLE_ELEMENT, element, status});
export const setElementsData = (elementsData) => ({type: SET_ELEMENTS_DATA, elementsData})

//THUNKS
export const updateElementStatus = (element, status) => (dispatch) => {
	// elementStatusAPI.updateElementStatus(element, status).then(data => {
	// 	if(data.resultCode === 0) {
			dispatch(toggleElement(element, status));
	// 	}
	// })
}
export const getElementsData = (elementsData) => (dispatch) => {
	// elementStatusAPI.getElementsData(elementsData).then(data => {
	// 	if(data.resultCode === 0) {
	// 			dispatch(setElementsData(data));
	// 	}
	// })
}

export default modeReducer;