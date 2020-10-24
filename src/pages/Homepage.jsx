import React, { useEffect } from 'react';
import Article from '../components/Article';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/actions/articleActions';
import SpinnerCustom from '../components/SpinnerCustom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Homepage = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articleReducer);
	const sortBy = useSelector((state) => state.sortReducer);

	useEffect(() => {
		if (articles.dataNotFetched) dispatch(fetchArticles());
	}, [articles.dataNotFetched, dispatch]);

	const sortByTitle = (a, b) => {
		let nameA = b.title.toLowerCase();
		let nameB = a.title.toLowerCase();
		if (nameA > nameB) {
			return -1;
		}
		if (nameA < nameB) {
			return 1;
		}
		return 0;
	};

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
			<div className="d-flex justify-content-between mb-4">
				<div>
					<Form.Group controlId="formGridState">
						<Form.Control
							as="select"
							value={sortBy}
							onChange={(e) =>
								dispatch({ type: 'SORT', payload: e.target.value })
							}
						>
							<option>Date</option>
							<option>Title</option>
						</Form.Control>
					</Form.Group>
				</div>
				<Link to="/new/page">
					<Button variant="primary">Add Page</Button>
				</Link>
			</div>
			{!articles.dataNotFetched ? (
				articles.data
					.sort((a, b) =>
						sortBy === 'Date' ? sortByDate(a, b) : sortByTitle(a, b)
					)
					.map((article) => <Article props={article} key={article.id} />)
			) : (
				<SpinnerCustom />
			)}
		</div>
	);
};

export default Homepage;
