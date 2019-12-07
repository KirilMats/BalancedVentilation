import React from 'react';
import c from './HeatMode.module.css';

const HeatMode = (props) => {
	let toggleMode = () => {
		if(props.systemData.isHeaterOn) {
			let confirmation = window.confirm("You are about to turn off the Heat mode. Please confirm the action.");
			if(confirmation === true) {
				props.updateElementStatus('heat', false);
				props.updateElementStatus('supplyFan', false);
				props.updateAutoMode(false);
			}
		}else{
			let confirmation = window.confirm("You are about to turn on the Heat mode. Please confirm the action.");
			if(confirmation === true) {
				props.updateElementStatus('heat', true);
				props.updateElementStatus('supplyFan', true);
				props.toggleFanBar(true);
				props.updateElementStatus('cool', false);
				props.updateAutoMode(false);
			}
		}
		// if(props.temperatureData.wantedTemperature > props.temperatureData.currentTemperature){
		// 	if(props.temperatureData.wantedTemperature >= 30) {
		// 		let confirmation = window.confirm(`The set temperature (${props.temperatureData.wantedTemperature}) is quite high. Please confirm the action.`);
		// 		if (confirmation === true) {
		// 			alert("You've just increased the temperature - the Heat Mode is on.");
		// 			props.toggleMode('heat', true);
		// 			props.modeData.isCoolModeOn && props.toggleMode('cool', false);
		// 			props.modeData.isAutoModeOn && props.toggleMode('auto', false);
		// 		}else {
		// 			props.toggleMode('heat', false);
		// 		}
		// 	}else {
		// 		alert("You've just increased the temperature - the Heat Mode is on.");
		// 		props.toggleMode('heat', true);
		// 		props.modeData.isCoolModeOn && props.toggleMode('cool', false);
		// 		props.modeData.isAutoModeOn && props.toggleMode('auto', false);
		// 	}
		// }
	}

	return (
		<div className={c.heatModeWrap}>
			<button disabled={!props.modeData.isSystemOn} className={`${c.heatModeButton} ${props.systemData.isHeaterOn && c.active}`} onClick={toggleMode}>
				<div className={c.heatImage}>
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					     viewBox="0 0 512 512" style={{enableBackground: `new 0 0 512 512`}} xmlSpace="preserve">
						<style type="text/css">
							{`.st3{fill:${props.systemData.isHeaterOn ? '#63CEBE' : '#343755'}`}
						</style>
											<g>
							<g>
								<path className="st3" d="M50.1,239.3H16.7C7.5,239.3,0,246.8,0,256c0,9.2,7.5,16.7,16.7,16.7h33.4c9.2,0,16.7-7.5,16.7-16.7
									C66.8,246.8,59.3,239.3,50.1,239.3z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M495.3,239.3h-33.4c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7h33.4c9.2,0,16.7-7.5,16.7-16.7
									C512,246.8,504.5,239.3,495.3,239.3z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M256,445.2c-9.2,0-16.7,7.5-16.7,16.7v33.4c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7v-33.4
									C272.7,452.7,265.2,445.2,256,445.2z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M256,0c-9.2,0-16.7,7.5-16.7,16.7v33.4c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7V16.7
									C272.7,7.5,265.2,0,256,0z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M390.1,454.9L373.4,426c-4.6-8-14.8-10.7-22.8-6.1c-8,4.6-10.7,14.8-6.1,22.8l16.7,28.9
									c4.6,8,14.8,10.7,22.8,6.1C392,473.1,394.7,462.9,390.1,454.9z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M167.5,69.3l-16.7-28.9c-4.6-8-14.8-10.7-22.8-6.1c-8,4.6-10.7,14.8-6.1,22.8L138.6,86
									c4.6,8,14.8,10.7,22.8,6.1C169.4,87.5,172.1,77.3,167.5,69.3z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M471.6,361.2l-28.9-16.7c-8-4.6-18.2-1.9-22.8,6.1c-4.6,8-1.9,18.2,6.1,22.8l28.9,16.7
									c8,4.6,18.2,1.9,22.8-6.1C482.3,376,479.6,365.8,471.6,361.2z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M86,138.6l-28.9-16.7c-8-4.6-18.2-1.9-22.8,6.1c-4.6,8-1.9,18.2,6.1,22.8l28.9,16.7c8,4.6,18.2,1.9,22.8-6.1
									C96.7,153.4,94,143.2,86,138.6z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M477.7,128c-4.6-8-14.8-10.7-22.8-6.1L426,138.6c-8,4.6-10.7,14.8-6.1,22.8c4.6,8,14.8,10.7,22.8,6.1
									l28.9-16.7C479.6,146.2,482.3,136,477.7,128z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M92.1,350.6c-4.6-8-14.8-10.7-22.8-6.1l-28.9,16.7c-8,4.6-10.7,14.8-6.1,22.8c4.6,8,14.8,10.7,22.8,6.1
									L86,373.4C94,368.8,96.7,358.6,92.1,350.6z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M384,34.3c-8-4.6-18.2-1.9-22.8,6.1l-16.7,28.9c-4.6,8-1.9,18.2,6.1,22.8c8,4.6,18.2,1.9,22.8-6.1l16.7-28.9
									C394.7,49.1,392,38.9,384,34.3z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M161.4,419.9c-8-4.6-18.2-1.9-22.8,6.1l-16.7,28.9c-4.6,8-1.9,18.2,6.1,22.8c8,4.6,18.2,1.9,22.8-6.1
									l16.7-28.9C172.1,434.7,169.4,424.5,161.4,419.9z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M256,100.2c-85.9,0-155.8,69.9-155.8,155.8S170.1,411.8,256,411.8S411.8,341.9,411.8,256
									S341.9,100.2,256,100.2z M256,378.4c-67.5,0-122.4-54.9-122.4-122.4S188.5,133.6,256,133.6S378.4,188.5,378.4,256
									S323.5,378.4,256,378.4z"/>
							</g>
						</g>
											<g>
							<g>
								<path className="st3" d="M256,167c-49.1,0-89,39.9-89,89c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7c0-30.7,25-55.7,55.7-55.7
									c9.2,0,16.7-7.5,16.7-16.7C272.7,174.4,265.2,167,256,167z"/>
							</g>
						</g>
						</svg>
				</div>
				<h4 className={props.systemData.isHeaterOn && c.active}>Heat</h4>
			</button>
		</div>
	)
}

export default HeatMode;