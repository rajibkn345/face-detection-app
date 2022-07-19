import React from "react";
import "tachyons";

const Navigation = () => {
	return (
		<nav style={{ display: "flex", justifyContent: "flex-end" }}>
			<p className='f4 link dim white pa3 pointer'>Sign Out</p>
		</nav>
	);
};

export default Navigation;
