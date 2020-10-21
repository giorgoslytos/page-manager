import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { articleReducer } from './reducers/articleReducer';

const store = createStore(
	articleReducer,
	composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);

export default store;
