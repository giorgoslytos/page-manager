import { DELETE_ARTICLE, FIND_ARTICLE, GET_ARTICLES } from '../types';

const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';

const getArticles = () => async (dispatch) => {
	const payload = await fetch(URL).then((res) => res.json());
	dispatch({ type: GET_ARTICLES, payload });
};

const deleteArticle = (id) => ({ type: DELETE_ARTICLE, payload: id });

export { getArticles, deleteArticle };
