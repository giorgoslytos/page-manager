import {
	GET_ARTICLES,
	GET_ARTICLES_SUCCESS,
	GET_ARTICLES_FAILURE,
	DELETE_ARTICLE,
	DELETE_ARTICLE_SUCCESS,
	DELETE_ARTICLE_FAILURE,
	ADD_ARTICLE,
	ADD_ARTICLE_SUCCESS,
	ADD_ARTICLE_FAILURE,
	UPDATE_ARTICLE,
	UPDATE_ARTICLE_SUCCESS,
	UPDATE_ARTICLE_FAILURE,
} from '../types';

export const initialState = {
	data: [],
	dataNotFetched: true,
	loading: false,
	hasErrors: false,
};

const articleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		// GET ALL ARTICLES
		case GET_ARTICLES:
			return { ...state, loading: true };
		case GET_ARTICLES_SUCCESS:
			return {
				data: payload,
				loading: false,
				hasErrors: false,
				dataNotFetched: false,
			};
		case GET_ARTICLES_FAILURE:
			return { ...state, loading: false, hasErrors: true };
		// DELETE AN ARTICLE
		case DELETE_ARTICLE:
			return { ...state, loading: true };
		case DELETE_ARTICLE_SUCCESS:
			return {
				data: state.data.filter((x) => x.id !== payload.id),
				loading: false,
				hasErrors: false,
			};
		case DELETE_ARTICLE_FAILURE:
			return { ...state, loading: false, hasErrors: true };
		// ADD AN ARTICLE
		case ADD_ARTICLE:
			return { ...state, loading: true };
		case ADD_ARTICLE_SUCCESS:
			return {
				data: [...state.data, payload],
				loading: false,
				hasErrors: false,
			};
		case ADD_ARTICLE_FAILURE:
			return { ...state, loading: false, hasErrors: true };
		// UPDATE AN ARTICLE
		case UPDATE_ARTICLE:
			return { ...state, loading: true };
		case UPDATE_ARTICLE_SUCCESS:
			return {
				data: state.data.map((x) =>
					x.id !== parseInt(payload.id)
						? x
						: { ...payload, id: parseInt(payload.id) }
				),
				loading: false,
				hasErrors: false,
			};
		case UPDATE_ARTICLE_FAILURE:
			return { ...state, loading: false, hasErrors: true };
		default:
			return state;
	}
};

export default articleReducer;
