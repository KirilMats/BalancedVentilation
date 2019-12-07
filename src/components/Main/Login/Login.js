import React from 'react';
import c from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router";

const LoginForm = (props) => {
	console.log(props);
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field className={`${props.error && c.inputError} ${c.loginInput}`} placeholder="Email" name="email" component="input" type="text"/></div>
			<div><Field className={`${props.error && c.inputError} ${c.passwordInput}`} placeholder="Password" name="password" component="input" type="password"/></div>
			{props.error && <div className={c.errorMessage}>Email or Password is incorrect</div>}
			<div><Field id="rememberMe" component="input" name="rememberMe" type="checkbox"/> <label htmlFor="rememberMe">remember me</label></div>
			<div><button>Login</button></div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

const Login = (props) => {
	console.log(props);
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}
	if(props.isAuth) {
		return <Redirect to={"/main"} />
	}
	return <div className={c.loginWrap}>
		<h3>Login</h3>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.authData.isAuth
})
export default connect(mapStateToProps, {login})(Login);