import React, { useContext, useEffect, useState } from 'react';
import Article from '../components/Article';
import Button from 'react-bootstrap/Button';
import { ArticleContext } from '../contexts/ArticleContext';

const Homepage = () => {
	const { articles } = useContext(ArticleContext);

	return (
		<div className="container">
			<h1 className="my-5 text-center">Ordereze Exercise</h1>
			<div className="text-right mb-4">
				<Button variant="primary">Add Article</Button>
			</div>
			{articles.map((article) => (
				<Article props={article} key={article.id} />
			))}
		</div>
	);
};

export default Homepage;
