import React, {Component} from 'react';
import './App.css';
import Content from "./components/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Main/Login/Login";
import {Route} from "react-router";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="App">
        <HeaderContainer/>
        <Route render={() => <Content/>} path='/main'/>
        <Route render={() => <Login/>} path='/login'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appData.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
