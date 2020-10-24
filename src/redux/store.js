import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import articleReducer from './reducers/articleReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
	articleReducer,
	sortReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;
