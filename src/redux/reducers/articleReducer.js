import { ADD_ARTICLE, DELETE_ARTICLE, GET_ARTICLES } from '../types';

const articleReducer = (state = null, { type, payload }) => {
	switch (type) {
		case GET_ARTICLES:
			return payload;
		case DELETE_ARTICLE:
			return state.filter((x) => x.id !== payload);
		case ADD_ARTICLE:
			return [...state, payload];
		default:
			return state;
	}
};

export default articleReducer;
