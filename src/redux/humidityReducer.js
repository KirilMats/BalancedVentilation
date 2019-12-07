const [CHANGE_HUMIDITY] = ['CHANGE_HUMIDITY'];

let initialState = {
	humidity: 46
}

const humidityReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_HUMIDITY:
			return {...state, humidity: action.humidity}
		default: return state;
	}

}

export const changeHumidity = (humidity) => ({type: CHANGE_HUMIDITY, humidity});

export default humidityReducer;