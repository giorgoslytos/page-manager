import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Publication from '../components/Publication';
import SpinnerCustom from '../components/SpinnerCustom';

const Page = () => {
	const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';
	const { id } = useParams();
	const [page, setPage] = useState(null);

	const fetchPage = async (id) => {
		setPage(
			await fetch(`${URL}${id}`, {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			}).then((res) => res.json())
		);
	};

	useEffect(() => {
		console.log(`${URL}${id}`);
		fetchPage(id);
	}, []);

	return !page ? (
		<SpinnerCustom />
	) : page.isActive ? (
		<div>
			<Header title={page?.title} />
			<p>{page?.description}</p>
			<hr />
			<Publication publishDate={page?.publishedOn} />
			<div className="d-flex justify-content-between my-5">
				<Link to="/">
					<Button variant="outline-danger">Back</Button>
				</Link>
				<Link
					to={`/edit/page/${id}/${encodeURI(
						page?.title.trim().replace(/\s+/g, '-')
					)}`}
				>
					<Button variant="outline-info">Edit</Button>
				</Link>
			</div>
		</div>
	) : (
		<div className="mt-5">
			<h1>We are sorry!!!</h1>
			<p>This page is currently unavailable</p>
			<Link to="/">
				<Button variant="outline-danger my-5">Back</Button>
			</Link>
		</div>
	);
};

export default Page;
