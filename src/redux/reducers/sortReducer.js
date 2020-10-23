const sortReducer = (state = 'Date', { type, payload }) => {
	switch (type) {
		case 'SORT':
			return payload;
		default:
			return state;
	}
};

export default sortReducer;
