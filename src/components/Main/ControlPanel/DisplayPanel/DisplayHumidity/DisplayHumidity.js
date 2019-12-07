import React from 'react';
import c from './DisplayHumidity.module.css';

const DisplayHumidity = (props) => {

	return (
		<div className={c.displayHumidityWrap}>
			<h2>Current Humidity is:</h2>
			<div className={c.displayHumidity}>
				<div className={c.humidityImage}>
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					     viewBox="0 0 348.8 512"style={{enableBackground: `new 0 0 348.8 512`}} xmlSpace="preserve">
						<style type="text/css">
							{`.st6 {fill:${props.humidityData.humidity >= 0 && props.humidityData.humidity < 20 ? '#ABC9ED' :
								props.humidityData.humidity >= 20 && props.humidityData.humidity < 30 ? '#589BED' :
								props.humidityData.humidity >= 30 && props.humidityData.humidity < 50 ? '#3186ED' :
								props.humidityData.humidity >= 50 && props.humidityData.humidity < 70 ? '#2A72CA' :
								'#2564B2'}`}
						</style>
						<g>
							<path className="st6" d="M185.9,5.7c-5.2-7.6-17.9-7.6-23,0C156.2,15.5,0.5,246.5,0.5,338.1C0.5,434,78.5,512,174.4,512
							c95.9,0,173.9-78,173.9-173.9C348.3,246.5,192.5,15.5,185.9,5.7z M174.4,484.2c-80.5,0-146.1-65.5-146.1-146.1
							c0-63.5,96.6-224,146.1-299.5c49.4,75.4,146.1,235.9,146.1,299.5C320.4,418.7,254.9,484.2,174.4,484.2z M188.3,442.4
							c0,7.7-6.3,13.9-13.9,13.9c-65.2,0-118.2-53-118.2-118.2c0-7.7,6.3-13.9,13.9-13.9c7.7,0,13.9,6.3,13.9,13.9
							c0,49.9,40.6,90.4,90.4,90.4C182,428.5,188.3,434.7,188.3,442.4z"/>
						</g>
					</svg>
				</div>
				<div className={c.humidityValue}>
					45%
				</div>
			</div>
		</div>
	)
}

export default DisplayHumidity;