import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path={['/', '/homepage']} exact>
				<Homepage />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
