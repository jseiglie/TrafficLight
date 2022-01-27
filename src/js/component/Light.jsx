import React from "react";
import "/workspace/react-hello/src/styles/Light.css";
import * as PropTypes from "prop-types";

const Light = (props) => {
	return (
		<>
			<div className={props.classLight}></div>
		</>
	);
};

Light.propTypes = {
	classLight: PropTypes.string,
};
export default Light;
