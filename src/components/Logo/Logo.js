import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
	return (
		<Tilty className='tilty br2 shadow-2' glare scale={1.05} maxGlare={0.5}>
			<div className='inner pa3'>
				<img src={brain} alt='brain' />{" "}
			</div>
		</Tilty>
	);
};

export default Logo;
