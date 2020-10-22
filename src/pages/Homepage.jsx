import React, { useEffect } from 'react';
import Article from '../components/Article';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';
import SpinnerCustom from '../components/SpinnerCustom';
import { Link } from 'react-router-dom';

const Homepage = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state);

	useEffect(() => {
		dispatch(getArticles());
	}, []);

	return (
		<div>
			<div className="text-right mb-4">
				<Link to="/new/page">
					<Button variant="primary">Add Page</Button>
				</Link>
			</div>
			{articles ? (
				articles
					.sort((a, b) => {
						let nameA = b.publishedOn;
						let nameB = a.publishedOn;
						if (nameA < nameB) {
							return -1;
						}
						if (nameA > nameB) {
							return 1;
						}
						return 0;
					})
					.map((article) => <Article props={article} key={article.id} />)
			) : (
				<SpinnerCustom />
			)}
		</div>
	);
};

export default Homepage;
