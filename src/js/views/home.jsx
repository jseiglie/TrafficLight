import React, { useState } from "react";
import TrafficLight from "../component/TrafficLight.jsx";
import Selected from "../component/Selected.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	const [select, setSelect] = useState();

	return (
		<>
			<div>
				<TrafficLight />
				<div className="myRed"></div>
				<div className="myYellow"></div>
				<div className="myGreen"></div>
				<Selected />
			</div>
		</>
	);
};

export default Home;
