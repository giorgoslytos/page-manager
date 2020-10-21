import React, { createContext, useState, useEffect } from 'react';

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
	const [articles, setArticles] = useState([]);

	const deleteArticle = (id) => {
		setArticles(articles.filter((x) => x.id !== id));
	};

	useEffect(() => {
		fetch('https://pagesmanagement.azurewebsites.net/api/ResponsivePages/')
			.then((res) => res.json())
			.then((data) => setArticles(data));
	}, [articles]);

	return (
		<ArticleContext.Provider value={{ articles, deleteArticle }}>
			{props.children}
		</ArticleContext.Provider>
	);
};

export default ArticleContextProvider;
