import React from "react";

const Register = ({ onRouteChange }) => {
	return (
		<main
			style={{ width: "fit-content" }}
			className='measure center pa4 shadow-4'
		>
			<div className='ma3'>
				<legend class='f4 fw6 ph0 mh0'>Register</legend>
				<div class='mt3'>
					<label class='db fw6 lh-copy f6' for='name'>
						Name
					</label>
					<input
						class='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
						type='text'
						name='name'
						id='name'
					/>
				</div>
				<div class='mt3'>
					<label class='db fw6 lh-copy f6' for='email-address'>
						Email
					</label>
					<input
						class='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
						type='email'
						name='email-address'
						id='email-address'
					/>
				</div>
				<div class='mv3'>
					<label class='db fw6 lh-copy f6' for='password'>
						Password
					</label>
					<input
						class='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
						type='password'
						name='password'
						id='password'
					/>
				</div>
				<button className='f6 link ph3 pv2 mb2 bg-transparent dib ba pointer dim'>
					Register
				</button>

				<p
					onClick={() => onRouteChange("signin")}
					href='#0'
					class='f6 pointer link dim black db'
				>
					Sign in
				</p>
			</div>
		</main>
	);
};

export default Register;
