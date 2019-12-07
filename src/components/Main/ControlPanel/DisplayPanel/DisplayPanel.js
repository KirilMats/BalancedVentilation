import React from 'react';
import c from './DisplayPanel.module.css';
import DisplayTemperature from "./DisplayTemperature/DisplayTemperature";
import DisplayHumidity from "./DisplayHumidity/DisplayHumidity";
import {connect} from "react-redux";
import {getCurrentTemperature, getWantedTemperature} from "../../../../redux/temperatureReducer";

class DisplayPanel extends React.Component {
	componentDidMount() {
		this.props.getWantedTemperature();
		this.props.getCurrentTemperature();
		setInterval(() => {this.props.getWantedTemperature(); this.props.getCurrentTemperature();}, 10 * 1000);
	}

	render() {
		return (
			<div className={c.displayPanelWrap}>
				<DisplayTemperature temperatureData={this.props.temperatureData} />
				<DisplayHumidity humidityData={this.props.humidityData} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		temperatureData: state.temperatureData,
		humidityData: state.humidityData
	}
}

export default connect(mapStateToProps, {getWantedTemperature, getCurrentTemperature})(DisplayPanel);