import React from 'react';
import {connect} from 'react-redux';
import {togglePreloader} from "../../redux/contentReducer";
import Preloader from "../Preloader/Preloader";

const mapStateToProps = (state) => ({
    isFetching: state.contentData.isFetching
})

const withPreloaderComponent = (Component) => {
    class PreloaderComponent extends React.Component {
        render() {
            return this.props.isFetching ? <Preloader /> : <Component {...this.props} />
        }
    }
    const connectedPreloaderComponent = connect(mapStateToProps, {togglePreloader})(PreloaderComponent);

    return connectedPreloaderComponent;
}

export default withPreloaderComponent;
