import React, { useState } from "react";
import TrafficLight from "/workspace/react-hello/src/js/component/TrafficLight.jsx";
import Light from "/workspace/react-hello/src/js/component/Light.jsx";
import "/workspace/react-hello/src/styles/Green.css";
import "/workspace/react-hello/src/styles/Red.css";
import "/workspace/react-hello/src/styles/Yellow.css";
import "/workspace/react-hello/src/styles/Glow.css";
//include images into your bundle

//create your first component
const Home = () => {
	const [glow, setGlow] = useState("Yellow");

	//onClick={() => (setGlow = "Red")}
	return (
		<>
			<TrafficLight />
			<Light
				classLight={
					"Light Red" + (glow === "Red" ? " Glow" : "")
				}></Light>
			<Light
				classLight={"Light Yellow" + (glow === "Yellow" ? " Glow" : "")}
			/>
			<Light
				classLight={"Light Green" + (glow === "Green" ? " Glow" : "")}
			/>
		</>
	);
};

export default Home;
