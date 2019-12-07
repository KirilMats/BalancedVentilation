import React from 'react';
import ControlPanel from "./ControlPanel/ControlPanel";
import c from './Main.module.css';

const Main = (props) => {
		return (
			<main className={c.contentWrap}>
				<ControlPanel />
			</main>
		)
}

export default Main;