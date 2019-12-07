import React from 'react';
import c from './ACComponents.module.css';
import Filter from "./Filter/Filter";
import Heater from "./Heater/Heater";
import Cooler from "./Cooler/Cooler";
import HeatPump from "./HeatPump/HeatPump";
import ExhaustFan from "../../Main/ControlPanel/ACModes/FanMode/ExaustFan/ExhaustFan";
import SupplyFan from "../../Main/ControlPanel/ACModes/FanMode/SupplyFan/SupplyFan";
import CoolPump from "./CoolPump/CoolPump";


class ACComponentsContainer extends React.Component {

	render() {
		return (
			<div className={c.componentsWrap}>
				<ExhaustFan />
				<SupplyFan />
				<Filter />
				<Heater />
				<Cooler />
				<HeatPump />
				<CoolPump />
				<ExhaustAirValve />
			</div>
		)
	}
}

export default ACComponentsContainer;