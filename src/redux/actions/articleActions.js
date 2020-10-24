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

const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';

export const fetchArticles = () => async (dispatch) => {
	dispatch({
		type: GET_ARTICLES,
	});
	try {
		const res = await fetch(URL);
		const data = await res.json();
		dispatch({
			type: GET_ARTICLES_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: GET_ARTICLES_FAILURE,
		});
		console.log(err);
	}
};

export const deleteArticle = (id) => async (dispatch) => {
	dispatch({
		type: DELETE_ARTICLE,
	});
	try {
		const res = await fetch(`${URL}${id}`, {
			method: 'DELETE',
		});
		const data = await res.json();
		dispatch({
			type: DELETE_ARTICLE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({ type: DELETE_ARTICLE_FAILURE });
		console.log(err);
	}
};

export const addArticle = (props) => async (dispatch) => {
	dispatch({
		type: ADD_ARTICLE,
	});
	try {
		const res = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(props),
		});
		const data = await res.json();
		dispatch({ type: ADD_ARTICLE_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: ADD_ARTICLE_FAILURE });
		console.log(err);
	}
};

export const updateArticle = (pageProps) => async (dispatch) => {
	dispatch({
		type: UPDATE_ARTICLE,
	});
	try {
		const res = await fetch(`${URL}${pageProps['id']}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(pageProps),
		});
		dispatch({ type: UPDATE_ARTICLE_SUCCESS, payload: pageProps });
	} catch (err) {
		dispatch({ type: UPDATE_ARTICLE_FAILURE });
		console.log(err);
	}
};
