import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/actions/articleActions';
import { Link } from 'react-router-dom';

const Article = ({ props }) => {
	const [activeStatus] = useState({
		class: props.isActive ? 'text-success' : 'text-danger',
		text: props.isActive ? 'yes' : 'no',
	});

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteArticle(id));
	};

	return (
		<div>
			<Card className="my-3">
				{/* <Card style={{ width: '18rem' }}> */}
				<Card.Body>
					<Card.Title className="text-center">{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<hr />
					<div>
						is active:{' '}
						<span className={activeStatus.class}>{activeStatus.text}</span>
					</div>
					<div>type: {props.type}</div>
					<div>
						published on: {new Date(props.publishedOn).toLocaleDateString()},
						at: {new Date(props.publishedOn).toLocaleTimeString()}
					</div>

					<div className="d-flex justify-content-between mt-4">
						<Button
							variant="outline-danger"
							onClick={() => handleDelete(props.id)}
						>
							Delete
						</Button>
						<div>
							<Link to={`/page/${props.id}`}>
								<Button variant="primary mx-3">Visit Page</Button>
							</Link>
							<Button variant="outline-info">Edit</Button>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Article;
