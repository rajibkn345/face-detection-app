import React, { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import "./App.css";

const app = new Clarifai.App({
	apiKey: "000cdd91e94147d5aac0bd1ef06439fa",
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imgURL: "",
			box: {},
		};
	}

	onButtonSubmit = () => {
		console.log("clicked");
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgURL)
			.then((response) => this.displayBox(this.calculateFaceLocation(response)))
			.catch((err) => console.log(err));
	};

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputimage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};
	displayBox = (box) => {
		this.setState({ box: box });
	};
	onInputChange = (event) => {
		this.setState({ imgURL: event.target.value });
	};

	render() {
		return (
			<div>
				<ParticlesBackground />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				<FaceRecognition box={this.state.box} imageUrl={this.state.imgURL} />
			</div>
		);
	}
}

export default App;
