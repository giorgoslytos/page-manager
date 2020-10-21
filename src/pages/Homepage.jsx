import React, { useContext, useEffect, useState } from 'react';
import Article from '../components/Article';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';

const Homepage = () => {
	const count = useSelector((state) => state);
	const dispatch = useDispatch();
	const articles = useSelector((state) => state);

	useEffect(() => {
		dispatch(getArticles());
	}, []);

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
