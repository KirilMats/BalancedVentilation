import React from 'react';
import c from './DisplayTemperature.module.css';

const DisplayTemperature = (props) => {
	console.log(props);
	return (
		<div className={c.displayTemperatureWrap}>
			<h2>Current Temperature is:</h2>
			<div className={c.displayTemperature}>
				<div className={c.temperatureImage}>
					<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					     viewBox="0 0 187.9 512" style={{enableBackground: `new 0 0 187.9 512`}} xmlSpace="preserve">
						<style type="text/css">
							{`.st5 {fill:${(props.temperatureData.currentTemperature >= 19 && props.temperatureData.currentTemperature < 24) ? '#F6DE05' : 
								(props.temperatureData.currentTemperature >= 24 && props.temperatureData.currentTemperature < 27) ? '#F67905' :
								(props.temperatureData.currentTemperature >= 27 && props.temperatureData.currentTemperature < 32) ? '#F64905' :
								(props.temperatureData.currentTemperature >= 32) ? '#F60505' :
								(props.temperatureData.currentTemperature <= 18 && props.temperatureData.currentTemperature > 15) ? '#0571F6' :
								'#03489D'}`
							}
						</style>
						<path className="st5" d="M93.7,0.2C60.7,0.3,34,27,34,59.9v286C8.7,366.6-4,399.1,0.8,431.5c7.2,51.3,54.7,87,106,79.8
		c46.4-6.5,80.8-46.3,80.7-93.1c0.1-28-12.4-54.5-34.1-72.3v-286C153.4,27,126.7,0.3,93.7,0.2z M170.5,418.2
		c0.1,42.4-34.3,76.8-76.7,76.9c-42.4,0.1-76.8-34.3-76.9-76.7c0-24.2,11.3-47,30.7-61.5c2.1-1.6,3.4-4.1,3.4-6.8v-25.7h17.1v-17.1
		H51.1v-25.6h17.1v-17.1H51.1v-25.6h17.1V222H51.1v-25.6h17.1v-17.1H51.1v-25.6h17.1v-17.1H51.1v-25.6h17.1V94.1H51.1V59.9
		c0-23.6,19.1-42.6,42.6-42.6c23.6,0,42.6,19.1,42.6,42.6v290.1c0,2.7,1.3,5.2,3.4,6.8C159.1,371.3,170.5,394,170.5,418.2z"/>
						<path className="st5" d="M102.2,376.4V77H85.2v299.4c-23.1,4.7-38,27.2-33.3,50.3s27.2,38,50.3,33.3c23.1-4.7,38-27.2,33.3-50.3
							C132.1,392.9,119,379.8,102.2,376.4z M93.7,443.8c-14.1,0-25.6-11.5-25.6-25.6c0-14.1,11.5-25.6,25.6-25.6s25.6,11.5,25.6,25.6
							C119.3,432.3,107.8,443.8,93.7,443.8z"/>
					</svg>
				</div>
				<div className={c.temperatureValue}>
					{props.temperatureData.currentTemperature}&#176;C
				</div>
			</div>
		</div>
	)
}

export default DisplayTemperature;