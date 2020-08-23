import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers'


const initialState = {};

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware,
        loggerMiddleware),




);

export default store;