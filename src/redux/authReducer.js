import {authAPI} from './../api/api';
import {stopSubmit} from "redux-form";

const [SET_USER_AUTH_DATA, SHOW_PRELOADER] = ['SET-USER-AUTH-DATA', 'SHOW-PRELOADER'];

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, ...action.payload}
        case SHOW_PRELOADER:
            return {...state, isFetching: action.isFetching};
        default: return state
    }
}

export const setUserAuthData = (userId, email, login, isAuth) => ({type: SET_USER_AUTH_DATA, payload: {userId, email, login, isAuth}});
export const showPreloader = (isFetching) => ({type: SHOW_PRELOADER, isFetching});


export const getUserAuthData = () => (dispatch) => {
    return authAPI.getUserAuthData().then(data => {
        dispatch(showPreloader(false));
        if(data.resultCode === 0){
            let {id, email, login} = data.data;
            dispatch(setUserAuthData(id, email, login, true));
        }
    });
}
//login
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        dispatch(showPreloader(false));
        if(data.resultCode === 0){
            dispatch(getUserAuthData());
        } else {
            let action = stopSubmit("login",  {_error: "Email or Password is incorrect"});
            dispatch(action);
        }
    });
};

//logout
export const logout = (email, password, rememberMe) => (dispatch) => {
    authAPI.logout().then(data => {
        dispatch(showPreloader(false));
        if(data.resultCode === 0){
            dispatch(setUserAuthData(null, null, null, false));
        }
    });
}

export default authReducer;