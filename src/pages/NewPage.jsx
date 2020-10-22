import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const NewPage = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isActive, setIsActive] = useState('');
	const [type, setType] = useState(9);
	const history = useHistory();

	const handleSubmit = (e) => {
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
		console.log(pageProps);
		dispatch(addArticle(pageProps));
		history.push('/');
	};

	return (
		<div>
			<h3 className="ml-4">Add New Page</h3>
			<Form onSubmit={handleSubmit}>
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
							{title.length > 50 ? (
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
						{description.length > 200 ? (
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
							<Form.Group
								as={Col}
								className="mt-auto"
								value={isActive}
								onChange={(e) =>
									setIsActive(e.target.value === 'yes' ? true : false)
								}
							>
								<Row className="ml-4">
									<label as="legend" column>
										Active:
									</label>
									<Form.Check
										type="radio"
										label="yes"
										name="active"
										value="yes"
										className="mx-4"
									/>
									<Form.Check
										type="radio"
										label="no"
										name="active"
										value="no"
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
									title.length === 0 ||
									title.length > 50 ||
									description.length > 200
								}
							>
								Add
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Form>
		</div>
	);
};

export default NewPage;
