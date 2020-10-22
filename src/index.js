import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewArticle from './pages/NewPage';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import SinglePage from './pages/SinglePage';

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<Header />
			<Router>
				<Switch>
					<Route exact path={['/', '/homepage']} component={Homepage} />
					<Route exact path="/new/page" component={NewArticle} />
					<Route exact path="/page/:id" component={SinglePage} />
					<Route exact component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);
