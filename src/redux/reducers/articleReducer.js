import {
	FIND_ARTICLE,
	ADD_ARTICLE,
	DELETE_ARTICLE,
	GET_ARTICLES,
} from '../types';

const articleReducer = (state = [], { type, payload }) => {
	// const { type, payload } = action;
	switch (type) {
		case GET_ARTICLES:
			return payload;
		case DELETE_ARTICLE:
			return state.filter((x) => x.id !== payload);
		case ADD_ARTICLE:
			return payload;
		default:
			return state;
	}
};

export { articleReducer };
