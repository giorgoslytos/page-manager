import {
	DELETE_ARTICLE,
	ADD_ARTICLE,
	FIND_ARTICLE,
	GET_ARTICLES,
	DELETE_ERROR,
	GET_ARTICLE,
} from '../types';

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
				// do what you want with the response here
				console.log(res);
				dispatch({ type: DELETE_ARTICLE, payload: id });
			});
	} catch (err) {
		console.log(err);
	}
};

const addArticle = (props) => async (dispatch) => {
	console.log(JSON.stringify(props));
	try {
		const response = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(props),
			// mode: 'no-cors',
		})
			.then((res) => res.json())
			.then((res) => {
				// do what you want with the response here
				console.log(res);
				dispatch({ type: ADD_ARTICLE, payload: res });
			});
	} catch (err) {
		console.log(err);
	}
};

export { getArticles, deleteArticle, addArticle };
