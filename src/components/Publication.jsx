import React from 'react';

const Publication = ({ publishDate }) => {
	return (
		<div>
			published on: {new Date(publishDate).toLocaleDateString()}, at:{' '}
			{new Date(publishDate).toLocaleTimeString()}
		</div>
	);
};

export default Publication;
