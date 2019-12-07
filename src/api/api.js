import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'f041efa9-43ee-4d4e-ad05-4c4b0d1b682c'
	}
})

//--AUTH
export const authAPI = {
	getUserAuthData: () => {
		return instance.get(`auth/me`, {withCredentials: true})
			.then(response => response.data);
	},
	login: (email, password, rememberMe = false) => {
		return instance.post(`auth/login`, {email, password, rememberMe})
			.then(response => response.data);
	},
	logout: (email, password, rememberMe = false) => {
		return instance.delete(`auth/login`, {email, password, rememberMe})
			.then(response => response.data);
	}
}

//ELEMENTS STATUS
export const elementStatusAPI = {
	updateElementStatus: (element, status) => {
		return instance.put('main/element/', {[element]: status})
			.then(response => response.data);
	},
	getElementsData: (element, status) => {
		return instance.get(`main/elementsData/`)
			.then(response => response.data);
	}
}

//MODE
export const modeAPI = {
	updatePeriod: (isWinterPeriod) => {
		return instance.put('main/period/', {isWinterPeriod: isWinterPeriod})
			.then(response => response.data);
	},
	updateSystemState: (isSystemOn) => {
		return instance.put('main/system/', {isSystemOn: isSystemOn})
			.then(response => response.data);
	},
	updateAutoMode: (isAutoModeOn) => {
		return instance.put('main/system/', {isAutoModeOn: isAutoModeOn})
			.then(response => response.data);
	},
	getModeData: () => {
		return instance.get(`main/modeData/`)
			.then(response => response.data);
	}
}

//TEMPERATURE
export const temperatureAPI = {
	updateWantedTemperature: (wantedTemperature) => {
		return instance.put('main/wantedTemperature/', {wantedTemperature: wantedTemperature})
			.then(response => response.data);
	},
	getWantedTemperature: () => {
		return instance.get(`main/wantedTemperature/`)
			.then(response => response.data);
	},
	getCurrentTemperature: () => {
		return instance.get(`main/currentTemperature/`)
			.then(response => response.data);
	}
}