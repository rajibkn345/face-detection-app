import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
		};
	}
	onButtonSubmit = () => {
		console.log("clicked");
	};
	onInputChange = (event) => {
		console.log(event.target.value);
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
			</div>
		);
	}
}

export default App;
