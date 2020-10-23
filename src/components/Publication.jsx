import React from 'react';

const Publication = ({ publishDate }) => (
	<div>
		published on:{' '}
		{new Date(
			publishDate[publishDate.length - 1] === 'Z'
				? publishDate
				: publishDate + 'Z'
		).toLocaleDateString()}
		, at:{' '}
		{new Date(
			publishDate[publishDate.length - 1] === 'Z'
				? publishDate
				: publishDate + 'Z'
		).toLocaleTimeString()}
	</div>
);

export default Publication;
