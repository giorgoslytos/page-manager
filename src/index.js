import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddEditPage from './pages/AddEditPage';
import NotFoundPage from './pages/NotFoundPage';
import Page from './pages/Page';

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<Router>
				<Switch>
					<Route exact path={['/', '/homepage']} component={Homepage} />
					<Route exact path="/new/page" component={AddEditPage} />
					<Route exact path="/edit/page/:id/:slug" component={AddEditPage} />
					<Route path="/page/:id" component={Page} />
					<Route exact component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);
