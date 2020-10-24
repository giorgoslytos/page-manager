import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Publication from '../components/Publication';
import SpinnerCustom from '../components/SpinnerCustom';

const Page = () => {
	const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';
	const { id } = useParams();
	const [page, setPage] = useState(null);
	const type = [
		'Responsive page that shows the Menu',
		'Responsive page for Events',
		'Responsive page for general content',
	];

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
		fetchPage(id);
	}, [id]);

	return !page ? (
		<SpinnerCustom />
	) : page.isActive ? (
		<div>
			<Header title={page?.title} />
			<p>{page?.description}</p>
			<hr />
			<div className="d-flex justify-content-between">
				<p>{type[page?.type]}</p>
				<Publication publishDate={page?.publishedOn} />
			</div>
		</div>
	) : (
		<div className="mt-5">
			<h1>We are sorry!!!</h1>
			<p>This page is currently unavailable...;(</p>
		</div>
	);
};

export default Page;
