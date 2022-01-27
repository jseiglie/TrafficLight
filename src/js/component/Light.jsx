import React from "react";
import "/workspace/TrafficLight/src/styles/Light.css";
import * as PropTypes from "prop-types";

const Light = (props) => {
	return (
		<>
			<div onClick={props.click} className={props.classLight}></div>
		</>
	);
};

Light.propTypes = {
	classLight: PropTypes.string,
	click: PropTypes.func,
};
export default Light;
