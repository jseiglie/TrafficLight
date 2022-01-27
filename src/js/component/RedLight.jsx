import React from "react";
import "../../styles/RedLight.css";
import * as PropTypes from "prop-types";

const RedLight = (props) => {
	return (
		<>
			<div className={props.redClass}></div>
		</>
	);
};

RedLight.propTypes = {
	redClass: PropTypes.string,
};
export default RedLight;
