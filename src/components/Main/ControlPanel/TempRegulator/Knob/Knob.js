import React from 'react';
import c from './Knob.module.css';

class Knob extends React.Component {
	constructor(props) {
		super(props);
		this.fullAngle = props.degrees;
		this.startAngle = (360 - props.degrees) / 2;
		this.endAngle = this.startAngle + props.degrees;
		this.margin = props.size * 0.15;
		this.currentDeg = Math.floor(
			this.convertRange(
				props.min,
				props.max,
				this.startAngle,
				this.endAngle,
				props.value
			)
		);
		this.state = { deg: this.currentDeg };
	}

	startDrag = e => {
		e.preventDefault();
		const knob = e.target.getBoundingClientRect();
		const pts = {
			x: knob.left + knob.width / 2,
			y: knob.top + knob.height / 2
		};
		const moveHandler = e => {
			this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
			if (this.currentDeg === this.startAngle) this.currentDeg--;
			let newValue = Math.floor(
				this.convertRange(
					this.startAngle,
					this.endAngle,
					this.props.min,
					this.props.max,
					this.currentDeg
				)
			);
			this.setState({ deg: this.currentDeg });
			this.props.onChange(newValue);
		};
		document.addEventListener("mousemove", moveHandler);
		document.addEventListener("touchmove", moveHandler);
		document.addEventListener("mouseup", e => {
			document.removeEventListener("mousemove", moveHandler);
		});
		document.addEventListener("touchend", e => {
			document.removeEventListener("touchmove", moveHandler);
		});
	};

	getDeg = (cX, cY, pts) => {
		const x = cX - pts.x;
		const y = cY - pts.y;
		let deg = Math.atan(y / x) * 180 / Math.PI;
		if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
			deg += 90;
		} else {
			deg += 270;
		}
		let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
		return finalDeg;
	};

	convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
		return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
	};

	renderTicks = () => {
		let ticks = [];
		const incr = this.fullAngle / this.props.numTicks;
		const size = this.margin + this.props.size / 2;
		for (let deg = this.startAngle; deg <= this.endAngle; deg += incr) {
			const tick = {
				deg: deg,
				tickStyle: {
					height: size + 10,
					left: size - 1,
					top: size + 2,
					transform: "rotate(" + deg + "deg)",
					transformOrigin: "top"
				}
			};
			ticks.push(tick);
		}
		return ticks;
	};

	dcpy = o => {
		return JSON.parse(JSON.stringify(o));
	};

	render() {
		let kStyle = {
			width: this.props.size,
			height: this.props.size
		};
		let iStyle = this.dcpy(kStyle);
		let oStyle = this.dcpy(kStyle);
		oStyle.margin = this.margin;
		if (this.props.color) {
			oStyle.backgroundImage =
				"radial-gradient(100% 70%,hsl(210, " +
				this.currentDeg +
				"%, " +
				this.currentDeg / 5 +
				"%),hsl(" +
				Math.random() * 100 +
				",20%," +
				this.currentDeg / 36 +
				"%))";
		}
		iStyle.transform = "rotate(" + this.state.deg + "deg)";

		return (
			<div className={c.knob} style={kStyle}>
				<div className={c.ticks}>
					{this.props.numTicks
						? this.renderTicks().map((tick, i) => (
							<div
								key={i}
								className={`${c.tick}  ${tick.deg <= this.currentDeg && c.active}`}
								style={tick.tickStyle}
							/>
						))
						: null}
				</div>
				<div className={`${c.knob} ${c.outer}`} style={oStyle} onMouseDown={this.startDrag}>
					<div className={`${c.knob} ${c.inner}`} style={iStyle}>
						<div className={c.grip} />
					</div>
				</div>
			</div>
		);
	}
}
Knob.defaultProps = {
	size: 250,
	min: 10,
	max: 30,
	numTicks: 0,
	degrees: 270,
	value: 0
};

class KnobInstance extends React.Component {
	state = { value: this.props.temperatureData.wantedTemperature  };

	handleEvent = () => {
			this.props.updateWantedTemperature(this.state.value);
	}

	handleChange = (newValue) => {
		this.setState({
			value: newValue
		});
		this.props.setWantedTemperature(this.state.value);
	}

	render() {
		return (
			<div onMouseUp={this.handleEvent} className={c.knobWrap}>
				<div className={c.tempValue}>{this.props.temperatureData.wantedTemperature}&#176;</div>
				<Knob
					numTicks={125}
					degrees={180}
					min={16}
					max={30}
					value={ this.props.temperatureData.wantedTemperature }
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default KnobInstance;