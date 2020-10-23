import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { addArticle } from '../redux/actions/articleActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import SpinnerCustom from '../components/SpinnerCustom';

const AddEditPage = () => {
	const URL = 'https://pagesmanagement.azurewebsites.net/api/ResponsivePages/';
	const { id } = useParams();
	const [page, setPage] = useState(null);
	const [readyToRender, setReadyToRender] = useState(false);

	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isActive, setIsActive] = useState('');
	const [type, setType] = useState(9);
	const history = useHistory();

	const fetchPage = async (id) => {
		try {
			setPage(
				await fetch(`${URL}${id}`, {
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
				}).then((res) => res.json())
			);
		} catch (err) {
			console.log(err);
		} finally {
			setReadyToRender(true);
		}
	};

	useEffect(() => {
		if (id) {
			// ENTER EDIT MODE
			setReadyToRender(false);
			fetchPage(id);
		} else {
			setReadyToRender(true);
		}
	}, []);

	useEffect(() => {
		if (page) {
			setTitle(page.title);
			setDescription(page.description);
			setIsActive(page.isActive);
			setType(page.type);
		}
	}, [page]);

	const handleAddition = (e) => {
		e.preventDefault();
		const pageProps = {};
		pageProps['title'] = title;
		description
			? (pageProps['description'] = description)
			: delete pageProps['description'];
		type !== 9 ? (pageProps['type'] = type) : delete pageProps['type'];
		isActive !== ''
			? (pageProps['isActive'] = isActive)
			: delete pageProps['isActive'];
		pageProps['publishedOn'] = new Date().toISOString();
		dispatch(addArticle(pageProps));
		history.push('/');
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		const pageProps = {};
		pageProps['id'] = id;
		pageProps['title'] = title;
		description
			? (pageProps['description'] = description)
			: delete pageProps['description'];
		type !== 9 ? (pageProps['type'] = type) : delete pageProps['type'];
		isActive !== ''
			? (pageProps['isActive'] = isActive)
			: delete pageProps['isActive'];
		pageProps['publishedOn'] = new Date().toISOString();

		try {
			const response = await fetch(
				`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(pageProps),
				}
			).then((res) => res.json());
		} catch (err) {
			console.log(err);
		} finally {
			history.push('/');
		}
	};

	return !readyToRender ? (
		<SpinnerCustom />
	) : (
		<div>
			<Header title={!id ? 'Add New Page' : 'Edit Page'} />
			<Form onSubmit={!id ? handleAddition : handleUpdate}>
				<Card className="my-3">
					<Card.Body>
						<Card.Title>
							<InputGroup>
								<FormControl
									required
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									placeholder="Title"
								/>
							</InputGroup>
							{title?.length > 50 ? (
								<div className="mr-5 text-danger">
									<small>
										The length of the characters in title should be less or
										equal to 50
									</small>
								</div>
							) : (
								''
							)}
						</Card.Title>
						<InputGroup>
							<FormControl
								as="textarea"
								value={description}
								placeholder="Description"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</InputGroup>
						{description?.length > 200 ? (
							<div className="mr-5 text-danger">
								<small>
									The length of the characters in title should be less or equal
									to 200
								</small>
							</div>
						) : (
							''
						)}
						<hr />
						<Form.Group as={Row}>
							<Form.Group as={Col} className="mt-auto">
								<Row className="ml-4">
									<label as="legend">Active:</label>
									<Form.Check
										type="radio"
										label="yes"
										checked={isActive}
										onChange={(e) => setIsActive(true)}
										className="mx-4"
									/>
									<Form.Check
										type="radio"
										label="no"
										checked={!isActive}
										onChange={(e) => setIsActive(false)}
										name="active"
									/>
								</Row>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>Type</Form.Label>
								<Form.Control
									as="select"
									value={type}
									onChange={(e) =>
										e.target.value !== 'Choose...'
											? setType(parseInt(e.target.value))
											: setType(9)
									}
								>
									<option>Choose...</option>
									<option>0</option>
									<option>1</option>
									<option>2</option>
								</Form.Control>
							</Form.Group>
						</Form.Group>
						<div className="d-flex justify-content-between mt-4">
							<Link to="/">
								<Button variant="outline-danger">Cancel</Button>
							</Link>
							<Button
								type="submit"
								variant="outline-primary"
								disabled={
									title?.length === 0 ||
									title?.length > 50 ||
									description?.length > 200
								}
							>
								{!id ? 'Add' : 'Update'}
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Form>
		</div>
	);
};

export default AddEditPage;
