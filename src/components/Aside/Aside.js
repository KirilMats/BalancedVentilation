import React from 'react';
import c from './Aside.module.css';
import ACComponentsContainer from "./ACComponents/ACComponentsContainer";

const Aside = (props) => {

	return (
		<aside className={c.asideWrap} >
			<ACComponentsContainer />
		</aside>
	)
}

export default Aside;