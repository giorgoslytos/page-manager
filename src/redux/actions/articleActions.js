import {
	DELETE_ARTICLE,
	FIND_ARTICLE,
	GET_ARTICLES,
	DELETE_ERROR,
	GET_ARTICLE,
} from '../types';

const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';

const getArticles = () => async (dispatch) => {
	try {
		const payload = await fetch(URL).then((res) => res.json());
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

const addArticle = ({ title, description, type, isActive, publishedOn }) => ({
	title,
	description,
	type,
	isActive,
	publishedOn,
});

export { getArticles, deleteArticle, addArticle };
