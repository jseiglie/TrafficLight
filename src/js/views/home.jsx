import React from "react";
import TrafficLight from "../component/TrafficLight.jsx";
import GreenLight from "../component/GreenLight.jsx";
import RedLight from "../component/RedLight.jsx";
import YellowLight from "../component/YellowLight.jsx";
import Selected from "../component/Selected.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<TrafficLight />
				<GreenLight />
				<RedLight />
				<YellowLight />
				<Selected />
			</div>
		</>
	);
};

export default Home;
