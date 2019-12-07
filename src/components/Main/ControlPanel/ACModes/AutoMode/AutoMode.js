import React from 'react';
import c from './AutoMode.module.css';

const AutoMode = (props) => {
	let toggleMode = () => {
		props.modeData.isAutoModeOn ? props.updateAutoMode(false) : props.updateAutoMode(true);
		if(props.modeData.isAutoModeOn) {
			let confirmation = window.confirm("You are about trun off the Auto mode. Please confirm the action.");
			if(confirmation === true) {
				props.updateAutoMode(false);
				props.updateElementStatus('cool', false);
				props.updateElementStatus('heat', false);
				props.updateElementStatus('supplyFan', false);
			}
		}else {
			let confirmation = window.confirm("You are about to turn on the Auto mode. Please confirm the action.");
			if(confirmation === true) {
				props.updateAutoMode(true);
				if (!props.modeData.isWinterPeriod) {
					props.updateElementStatus('cool', true);
					props.updateElementStatus('supplyFan', true);
					props.updateElementStatus('heat', false);
					props.toggleFanBar(true);
					alert('The Auto Summer mode is on.');
				} else {
					props.updateElementStatus('cool', false);
					props.updateElementStatus('supplyFan', true);
					props.updateElementStatus('heat', true);
					props.toggleFanBar(true);
					alert('The Auto Winter mode is on.');
				}
			}
		}
	}

	return (
		<div className={c.autoModeWrap}>
			<button disabled={!props.modeData.isSystemOn} className={`${c.autoModeButton} ${props.modeData.isAutoModeOn && c.active}`} onClick={toggleMode}>
				<div className={c.autoImage}>
					<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					     viewBox="0 0 512 512" style={{enableBackground: `new 0 0 512 512`}} xmlSpace="preserve">
						<style type="text/css">
							{`.st1{fill:${props.modeData.isAutoModeOn ? '#63CEBE' : '#343755'}`}
						</style>
						<path className="st1" d="M16.5,267.1c-9.1,0-16.5-10-16.5-22.3C0,159,51.9,89,115.6,89h280.8c9.1,0,16.5,10,16.5,22.3
		s-7.4,22.3-16.5,22.3H115.6c-45.5,0-82.6,49.9-82.6,111.3C33,257.2,25.6,267.1,16.5,267.1z"/>
						<path className="st1" d="M396.4,222.6c-2.7,0-5.4-0.9-7.8-2.6c-5.4-3.9-8.7-11.4-8.7-19.6V22.3c0-8.2,3.4-15.8,8.7-19.6
		c5.4-3.9,11.9-3.4,17,1.1l99.1,89c4.6,4.1,7.4,11.1,7.4,18.5c0,7.4-2.8,14.4-7.4,18.5l-99.1,89C402.8,221.4,399.6,222.6,396.4,222.6
		z M412.9,63.9v94.9l52.8-47.5L412.9,63.9z"/>
						<path className="st1" d="M396.4,423H115.6c-9.1,0-16.5-10-16.5-22.3c0-12.3,7.4-22.3,16.5-22.3h280.8c45.5,0,82.6-49.9,82.6-111.3
		c0-12.3,7.4-22.3,16.5-22.3s16.5,10,16.5,22.3C512,353,460.1,423,396.4,423z"/>
						<path className="st1" d="M115.6,512c-3.2,0-6.4-1.3-9.2-3.7l-99.1-89C2.8,415.1,0,408.1,0,400.7c0-7.4,2.8-14.4,7.4-18.5l99.1-89
		c5.1-4.5,11.6-5,17-1.1c5.4,3.9,8.7,11.4,8.7,19.6v178.1c0,8.2-3.4,15.8-8.7,19.6C121,511.1,118.3,512,115.6,512z M46.3,400.7
		l52.8,47.5v-94.9L46.3,400.7z"/>
					</svg>
				</div>
				<h4 className={props.modeData.isAutoModeOn && c.active}>Auto</h4>
			</button>
		</div>
	)
}

export default AutoMode;