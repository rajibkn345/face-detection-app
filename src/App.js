import React, { Component, Fragment } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

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
			inputURL: "",
			route: {},
			isSigned: false,
		};
	}

	onButtonSubmit = () => {
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgURL)
			.then((response) => this.displayBox(this.calculateFaceLocation(response)))
			.catch((err) => console.log(err));
		this.setState({ inputURL: "" });
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
		event.preventDefault();
		this.setState({ imgURL: event.target.value, inputURL: event.target.value });
		this.setState({ box: {} });
	};

	routeHandler = (data) => {
		if (data === "home") {
			this.setState({ isSigned: true });
		} else if (data === "signout") {
			this.setState({ isSigned: false });
		}

		this.setState({ route: data });
	};

	render() {
		return (
			<div>
				<ParticlesBackground />

				<Navigation
					onRouteChange={this.routeHandler}
					isSignedIn={this.state.isSigned}
				/>
				{this.state.route === "home" ? (
					<Fragment>
						<Logo />
						<Rank />
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
							inputURL={this.state.inputURL}
						/>
						<FaceRecognition
							box={this.state.box}
							imageUrl={this.state.imgURL}
						/>
					</Fragment>
				) : this.state.route === "register" ? (
					<Register onRouteChange={this.routeHandler} />
				) : (
					<Signin onRouteChange={this.routeHandler} />
				)}
			</div>
		);
	}
}

export default App;
