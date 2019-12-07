import React from 'react';
import c from './PeriodSwitcher.module.css';

const PeriodSwitcher = (props) => {
	const switchPeriod = (e) => {
		if(props.modeData.isSystemOn){
			alert('Please turn off the system before changing the period.')
		}else {
			if (!props.modeData.isWinterPeriod) {
				let confirmationOff = window.confirm("You are about to switch the system to Winter Period. Please confirm the action.");
				if (confirmationOff === true) {
					props.updatePeriod(true);
				}
			} else {
				let confirmationOn = window.confirm("You are about to switch the system to Summer Period. Please confirm the action.");
				if (confirmationOn) {
					props.updatePeriod(false);
				}
			}
		}
	}
	return (
		<div className={c.switcherWrap}>
			<span className={`${c.switcher}`}>
			   <input type="checkbox" name="periodSwitcher" id="periodSwitcher" checked={props.modeData.isWinterPeriod} onChange={switchPeriod}/>
			   <label htmlFor="periodSwitcher"></label>
			</span>
		</div>
	)
}

export default PeriodSwitcher;