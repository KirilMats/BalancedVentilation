import React from 'react';
import {connect} from "react-redux";
import Main from "./Main/Main";
import withPreloader from "./HOC/withPreloader";
import {togglePreloader} from "../redux/contentReducer";
import {compose} from "redux";
import withoutAuthRedirect from "./HOC/withoutAuthRedirect";
import Aside from "./Aside/Aside";
import c from './Content.module.css';
import Footer from "./Footer/Footer";

const Content = () => {
	return (
		<div className={c.contentWrap}>
			<Aside />
			<Main />
			<Footer />
		</div>
	);
}

class ContentContainer extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.togglePreloader(false);
		}, 0)
	}

	render() {
		const ContentWithPreloader = withPreloader(Content);
		return <ContentWithPreloader {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		contentData: state.contentData
	}
}


export default compose(connect(mapStateToProps, {togglePreloader}), withoutAuthRedirect)(ContentContainer);