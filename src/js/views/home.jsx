import React from "react";
import TrafficLight from "../component/TrafficLight.jsx";
import GreenLight from "../component/GreenLight.jsx";
import RedLight from "../component/RedLight.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<TrafficLight />
				<RedLight />
				<GreenLight />
			</div>
		</>
	);
};

export default Home;
