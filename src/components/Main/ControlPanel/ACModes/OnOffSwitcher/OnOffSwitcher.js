import React from 'react';
import c from './OnOffSwitcher.module.css';

const OnOffSwitcher = (props) => {
	const onOffSwitch = (e) => {
		if(props.modeData.isSystemOn){
			let confirmationOff = window.confirm("You are about to turn off the system. Please confirm the action.");
			if(confirmationOff === true) {
				props.updateSystemState(false);
				props.systemData.isExhaustFanOn && props.updateElementStatus('exhaustFan', false);
				props.systemData.isSupplyFanOn && props.updateElementStatus('supplyFan', false);
				props.modeData.isFanBarShown && props.toggleFanBar(false);
				props.modeData.isAutoModeOn && props.updateAutoMode(false);
				props.systemData.isCoolerOn && props.updateElementStatus('cool', false);
				props.systemData.isHeaterOn && props.updateElementStatus('heat', false);
			}
		}else{
			let confirmationOn = window.confirm("You are about to turn on the system. Please confirm the action.");
			if(confirmationOn) {
				if(!props.systemData.isFilterOk || !props.systemData.isCoolerOk || !props.systemData.isHeaterOk || !props.systemData.isExhaustFanOk || !props.systemData.isSupplyFanOk || !props.systemData.isExhaustAirValveOk || !props.systemData.isSupplyAirValveOk){
					props.updateSystemState(false);
					alert('One of the elements of the system is faulty. System is can\'t be turned on');
				}else{
					props.updateSystemState(true);
				}
			}
		}
	}
	return (
		<div className={c.switcherWrap}>
			<span className={`${c.switcher}`}>
			   <input type="checkbox" name="switcher" id="switcher" checked={props.modeData.isSystemOn} onChange={onOffSwitch}/>
			   <label htmlFor="switcher"></label>
			</span>
		</div>
	)
}

export default OnOffSwitcher;