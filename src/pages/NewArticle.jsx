import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { addArticle } from '../redux/actions/articleActions';
import { useDispatch } from 'react-redux';

const NewArticle = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isActive, setIsActive] = useState('');
	const [type, setType] = useState('');

	useEffect(() => {}, [title]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(addArticle(article));
		console.log({
			title,
			description,
			type,
			isActive,
			publishedOn: new Date(),
		});
		window.location.href = '/';
	};

	return (
		<div>
			<h3>Add New Article</h3>
			<Form onSubmit={handleSubmit}>
				<Card className="my-3">
					<Card.Body>
						<Card.Title>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Title: </InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									required
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									placeholder="Title"
								/>
							</InputGroup>
						</Card.Title>
						<Card.Text>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Description</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									as="textarea"
									value={description}
									placeholder="Description"
									onChange={(e) => setDescription(e.target.value)}
								/>
							</InputGroup>
						</Card.Text>
						<hr />
						<Card.Text>
							<InputGroup className="mb-3">
								<InputGroup.Prepend>
									<InputGroup.Text>Is Active: </InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									placeholder="Is Active"
									onChange={(e) => setIsActive(e.target.value)}
									value={isActive}
								/>
							</InputGroup>
							<InputGroup className="mb-5">
								<InputGroup.Prepend>
									<InputGroup.Text>Type: </InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									placeholder="Type"
									value={type}
									onChange={(e) => setType(e.target.value)}
								/>
							</InputGroup>
						</Card.Text>

						<div className="d-flex justify-content-between">
							<Link to="/">
								<Button variant="outline-danger">Cancel</Button>
							</Link>
							<Button type="submit" variant="outline-primary">
								Add
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Form>
		</div>
	);
};

export default NewArticle;
