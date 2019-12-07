import React from 'react';
import c from './ControlPanel.module.css';
import ModeContainer from './ACModes/ModeContainer';
import TempRegulator from './TempRegulator/TempRegulator';
import DisplayPanel from "./DisplayPanel/DisplayPanel";

const ControlPanel = (props) => {
	return <div class={c.controlPanelWrap}>
		<ModeContainer />
		<DisplayPanel />
		<TempRegulator />
	</div>
}

export default ControlPanel;