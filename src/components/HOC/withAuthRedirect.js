import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authData.isAuth
});

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log(this.props.isAuth);
            return this.props.isAuth ? <Redirect to="/main" /> : <Component />
        }
    }

    const connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return connectedRedirectComponent;
}

export default withAuthRedirect;