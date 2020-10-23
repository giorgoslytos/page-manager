import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';
import SpinnerCustom from '../components/SpinnerCustom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Homepage = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state);

	useEffect(() => {
		dispatch(getArticles());
	}, []);

	const sortByDate = (a, b) => {
		let nameA = b.publishedOn;
		let nameB = a.publishedOn;
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	};

	return (
		<div className="mb-5">
			<Header title="Ordereze Exercise" />
			<div className="text-right mb-4">
				<Link to="/new/page">
					<Button variant="primary">Add Page</Button>
				</Link>
			</div>
			{articles ? (
				articles
					.sort((a, b) => sortByDate(a, b))
					.map((article) => <Article props={article} key={article.id} />)
			) : (
				<SpinnerCustom />
			)}
		</div>
	);
};

export default Homepage;
