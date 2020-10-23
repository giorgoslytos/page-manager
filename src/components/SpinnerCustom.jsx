import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerCustom = () => {
	return (
		<div className="text-center my-5">
			<Spinner animation="border" role="status" variant="primary">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	);
};

export default SpinnerCustom;
