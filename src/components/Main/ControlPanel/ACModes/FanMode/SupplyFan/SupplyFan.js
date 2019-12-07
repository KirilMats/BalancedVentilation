import React from 'react';
import c from './SupplyFan.module.css';

const SupplyFan = (props) => {
	let toggleMode = () => {
		let confirmation = window.confirm("You are about to turn on the Supply Fan mode. Please confirm the action.");
		if(confirmation === true) {
				props.systemData.isSupplyFanOn ? props.updateElementStatus('supplyFan', false) : props.updateElementStatus('supplyFan', true);
		}
	}
	return (
		<button className={props.systemData.isSupplyFanOn && c.active} onClick={toggleMode}>
			<div className={c.supplyFanImage}>
				<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				     viewBox="0 0 511 476.1" style={{enableBackground: `new 0 0 512 476.1`}} xmlSpace="preserve">
					<style type="text/css">
						{`.st8{fill:${props.systemData.isSupplyFanOn ? '#63CEBE' : '#343755'}`}
					</style>
					<path className="st8" d="M505.1,307.9l-2.6-7.9l-48.7-12.2c0.3-4.4,0.4-8.9,0.4-13.3c0-56.8-24.4-111-66.9-148.7l-19.9,22.4
						c36.1,32,56.9,78.1,56.9,126.3c0,2,0,4-0.1,5.9l-31.6-7.9c-0.4-31.1-11.5-61.2-31.3-85.2l-23.1,19.1c13.7,16.6,22.1,37.1,24,58.5
						l-32.2-8.1c-3.5-14.7-11.2-27.8-21.9-37.9l49-171l-5.5-6.2c-23.8-26.4-58.8-41.6-96-41.6s-72.2,15.2-96,41.6l-5.5,6.2l13.8,48.2
						c-10.8,5.4-21.3,11.7-31.1,19.1c-33.4,25-58.5,60.5-70.9,100.1l28.6,8.9c13.6-43.7,43.5-78.6,81.8-98.9l9,31.5
						c-11.8,7-22.5,15.9-31.9,26.3l22.3,19.9c5.5-6.1,11.6-11.5,18.2-16.2l9.2,32c-10.6,10-18.3,23-21.8,37.6l-32.3,8
						c1.1-12.4,4.3-24.3,9.6-35.5l-27.1-12.7c-8.2,17.6-12.6,36.3-12.9,55.8l-110,27.2L6,307.2C-5,341-0.7,378.9,17.8,411.2
						c18.6,32.3,49.1,55.1,83.9,62.5l8.1,1.7l35-36.1c32.6,21.9,71.1,33.8,110.8,33.8c13.7,0,27.4-1.4,40.7-4.2l-6.1-29.3
						c-11.3,2.4-22.9,3.5-34.6,3.5c-32.6,0-63.4-9.4-89.5-25.8l22.6-23.4c19.8,11.1,42.6,17.5,66.9,17.5v-29.9c-16.1,0-31.4-3.6-45.1-10
						l23.1-23.9c7,2.1,14.3,3.2,22,3.2c7.6,0,14.9-1.1,21.8-3.2l123.5,128.1l8.1-1.7c34.8-7.3,65.4-30.1,84-62.3
						C511.6,379.6,516,341.7,505.1,307.9z M304.7,333c13.4-11.3,23-27.1,26.2-45.1l147.9,37c5.4,23.7,1.3,49.5-11.7,71.9
						c-13,22.4-33.3,38.8-56.5,46L304.7,333z M187.5,56c17.8-16.5,42.2-25.9,68.1-25.9c25.9,0,50.3,9.4,68.1,25.9l-42,146.6
						c-8.1-3-16.9-4.6-26.1-4.6c-9.2,0-17.9,1.6-26.1,4.6L187.5,56z M100.2,442.4c-23.2-7.2-43.5-23.7-56.4-46.1s-17-48.2-11.5-71.9
						l148-36.6c3.2,18,12.6,33.9,26,45.2L100.2,442.4z M209.1,274.5c0-25.7,20.9-46.5,46.5-46.5c25.7,0,46.5,20.9,46.5,46.5
						c0,25.6-20.9,46.5-46.5,46.5C229.9,321,209.1,300.1,209.1,274.5z"/>
				</svg>
			</div>
			<h4 className={props.systemData.isSupplyFanOn && c.active}>Supply</h4>
		</button>
	)
}

export default SupplyFan;