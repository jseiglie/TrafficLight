import React, { useState } from "react";
import TrafficLight from "/workspace/react-hello/src/js/component/TrafficLight.jsx";
import Light from "../../component/Light";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<TrafficLight />
			<Light />
		</>
	);
};

export default Home;
