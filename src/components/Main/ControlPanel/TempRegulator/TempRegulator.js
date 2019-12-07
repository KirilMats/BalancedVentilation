import React from 'react';
import c from './TempRegulator.module.css';
import Knob from "./Knob/Knob";
import {connect} from "react-redux";
import {setCurrentTemperature, setWantedTemperature, updateWantedTemperature} from "../../../../redux/temperatureReducer";

class TempRegulator extends React.Component {

	render() {
		return (
			<div className={c.tempRegulatorWrap}>
				<Knob {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		temperatureData: state.temperatureData
	}
}

export default connect(mapStateToProps, {setWantedTemperature, updateWantedTemperature})(TempRegulator);