import React from "react";
import "../../styles/YellowLight.css";
import * as PropTypes from "prop-types";

const YellowLight = (props) => {
	return (
		<>
			<div className={props.yellowClass}></div>
		</>
	);
};

YellowLight.propTypes = {
	yellowClass: PropTypes.string,
};

export default YellowLight;
