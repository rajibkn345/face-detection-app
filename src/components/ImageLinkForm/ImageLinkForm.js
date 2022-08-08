import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onButtonSubmit, onInputChange, inputURL }) => {
	return (
		<div style={{ textAlign: "center" }}>
			<p className='f4'>
				{"This magic brain will detect faces in pictures. Give it a try"}
			</p>
			<div className='center i-linkform'>
				<div className='form pa4 br3 shadow-5 center'>
					<input
						className='f4 pa2 w-70 center'
						type={"text"}
						onChange={onInputChange}
						value={inputURL}
					/>
					<button
						style={{ cursor: "pointer" }}
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
