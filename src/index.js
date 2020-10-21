import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContextProvider from './contexts/ArticleContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<ArticleContextProvider>
			<Router>
				<Route path={['/', '/homepage']} exact>
					<Homepage />
				</Route>
			</Router>
		</ArticleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
