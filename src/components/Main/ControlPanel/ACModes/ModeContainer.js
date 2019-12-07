import React from 'react';
import c from "./Modes.module.css";
import FanMode from "./FanMode/FanMode";
import AutoMode from "./AutoMode/AutoMode";
import {connect} from "react-redux";
import {getModeData, toggleFanBar, updateAutoMode, updatePeriod, updateSystemState} from '../../../../redux/modeReducer';
import OnOffSwitcher from "./OnOffSwitcher/OnOffSwitcher";
import HeatMode from "./HeatMode/HeatMode";
import CoolMode from "./CoolMode/CoolMode";
import {getElementsData, updateElementStatus} from "../../../../redux/systemDataReducer";
import PeriodSwitcher from "./PeriodSwitcher/PeriodSwitcher";

class ModeContainer extends React.Component {
	componentDidMount() {
		this.props.getModeData();
		setInterval(() => {this.props.getModeData()}, 60 * 1000);
	}

	render() {
		return (
			<div className={c.modesWrap}>
				<div className={c.buttonsWrap}>
					<CoolMode {...this.props} />
					<HeatMode {...this.props} />
					<FanMode {...this.props} />
					<AutoMode {...this.props} />
				</div>
				<div className={c.switchersWrap}>
					<OnOffSwitcher {...this.props} />
					<PeriodSwitcher {...this.props} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		modeData: state.modeData,
		temperatureData: state.temperatureData,
		systemData: state.systemData
	}
}

export default connect(mapStateToProps, {getModeData, toggleFanBar, updateAutoMode, getElementsData, updateElementStatus, updateSystemState, updatePeriod})(ModeContainer);