import { createStore, combineReducers, applyMiddleware } from "redux";
import modeReducer from "./modeReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';
import temperatureReducer from "./temperatureReducer";
import humidityReducer from "./humidityReducer";
import contentReducer from "./contentReducer";
import authReducer from "./authReducer";
import systemDataReducer from "./systemDataReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
	appData: appReducer,
	modeData: modeReducer,
	temperatureData: temperatureReducer,
	humidityData: humidityReducer,
	contentData: contentReducer,
	authData: authReducer,
	systemData: systemDataReducer,
	form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;