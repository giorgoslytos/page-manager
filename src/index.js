import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewArticle from './pages/NewArticle';
import Header from './components/Header';

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<Header />
			<Router>
				<Route path={['/', '/homepage']} exact>
					<Homepage />
				</Route>
				<Route path="/article/new" exact>
					<NewArticle />
				</Route>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);
