import React from "react";
import "tachyons";

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{ display: "flex", justifyContent: "flex-end" }}>
				<p
					onClick={() => onRouteChange("signout")}
					className='f3 link dim white pointer pa3'
				>
					Sign out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{ display: "flex", justifyContent: "flex-end" }}>
				<p
					onClick={() => onRouteChange("signin")}
					className='f4 link dim white pa3 pointer'
				>
					Sign in
				</p>
				<p
					onClick={() => onRouteChange("register")}
					className='f4 link dim white pa3 pointer'
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;
