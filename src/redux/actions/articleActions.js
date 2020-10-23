import { DELETE_ARTICLE, ADD_ARTICLE, GET_ARTICLES } from '../types';

const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';

const getArticles = () => async (dispatch) => {
	try {
		let payload = await fetch(URL).then((res) => res.json());
		dispatch({ type: GET_ARTICLES, payload });
	} catch (err) {
		console.log(err);
	}
};

const deleteArticle = (id) => async (dispatch) => {
	try {
		const response = await fetch(`${URL}${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch({ type: DELETE_ARTICLE, payload: id });
			});
	} catch (err) {
		console.log(err);
	}
};

const addArticle = (props) => async (dispatch) => {
	let response;
	try {
		response = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(props),
		});
		dispatch({ type: ADD_ARTICLE, payload: await response.json() });
	} catch (err) {
		console.log(err);
	}
};

export { getArticles, deleteArticle, addArticle };
