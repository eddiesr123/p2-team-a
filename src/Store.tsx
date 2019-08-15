import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './reducers';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk, logger),
    offline(offlineConfig)
    // other store enhancers if any
);

export const store: Store<any> = createStore(
    state,
    enhancer
);