import React from 'react';
import '../../style/NotFound.css';

export const NotFound = () => {
	return (
		<div className="notFound">
			<img
				src="https://static.vecteezy.com/system/resources/previews/007/119/646/large_2x/cute-sad-cake-character-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-sad-cake-character-concept-vector.jpg"
				alt=""
			/>
			<div className="description">
				<h2>404</h2>
				<h3>Ho no! Something has gone wrong</h3>
				<p>The page you want to access does not exist</p>
			</div>
		</div>
	);
};
