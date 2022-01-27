import propTypes from "prop-types";
import React from "react";
import "../../styles/GreenLight.css";
import * as PropTypes from "prop-types";

const GreenLight = (props) => {
	return (
		<>
			<div className={props.greenClass}></div>
		</>
	);
};

GreenLight.propTypes = {
	greenClass: PropTypes.string,
};

export default GreenLight;
