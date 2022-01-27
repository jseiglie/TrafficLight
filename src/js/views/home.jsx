import React, { useState } from "react";

import Light from "/workspace/TrafficLight/src/js/component/Light.jsx";
import "/workspace/TrafficLight/src/styles/Green.css";
import "/workspace/TrafficLight/src/styles/Red.css";
import "/workspace/TrafficLight/src/styles/Yellow.css";
import "/workspace/TrafficLight/src/styles/Glow.css";
//include images into your bundle

//create your first component
const Home = () => {
	const [glow, setGlow] = useState("Yellow");

	//
	return (
		<>
			<div className="myContainer">
				<Light
					click={() => {
						setGlow("Red");
					}}
					classLight={
						"Light Red" + (glow == "Red" ? " Glow" : "")
					}></Light>
				<Light
					click={() => {
						setGlow("Yellow");
					}}
					classLight={
						"Light Yellow" + (glow == "Yellow" ? " Glow" : "")
					}
				/>
				<Light
					click={() => {
						setGlow("Green");
					}}
					classLight={
						"Light Green" + (glow == "Green" ? " Glow" : "")
					}
				/>
			</div>
		</>
	);
};

export default Home;
