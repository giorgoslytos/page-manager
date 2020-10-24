import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/actions/articleActions';
import { Link } from 'react-router-dom';
import Publication from './Publication';
import SpinnerCustom from './SpinnerCustom';

const Article = ({ props }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteArticle(id));
	};

	return props ? (
		<div>
			<Card className="my-3">
				<Card.Body>
					<Card.Title className="text-center">{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<hr />
					<div>type: {props.type}</div>
					<div>
						active:{' '}
						<span className={props?.isActive ? 'text-success' : 'text-danger'}>
							{props?.isActive ? 'yes' : 'no'}
						</span>
					</div>
					<Publication publishDate={props.publishedOn} />
					<div className="d-flex justify-content-between mt-4">
						<Button
							variant="outline-danger"
							onClick={() => handleDelete(props.id)}
						>
							Delete
						</Button>
						<div>
							<Link
								to={`/page/${props.id}/${encodeURI(
									props.title.trim().replace(/\s+/g, '-')
								)}`}
								target="_blank"
							>
								<Button variant="primary mx-3">Visit Page</Button>
							</Link>
							<Link
								to={`/edit/page/${props.id}/${encodeURI(
									props.title.trim().replace(/\s+/g, '-')
								)}`}
							>
								<Button variant="outline-info">Edit</Button>
							</Link>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	) : (
		<SpinnerCustom />
	);
};

export default Article;
