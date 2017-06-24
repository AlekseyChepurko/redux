/**
 * Created by Алексей on 23.06.2017.
 */
import todos from './reducers/dans'
import {createStore, applyMiddleware} from 'redux'
import promisesMiddleware from './midlewares/promises'
// import logger from ''


let createStoreWithMiddleware;
if(process.env.NODE_ENV !== 'production'){
    const {logger} = require('redux-logger');
    createStoreWithMiddleware =
        applyMiddleware(
            promisesMiddleware,
            logger
        )(createStore);
}
else {
    createStoreWithMiddleware =
        applyMiddleware(
            promisesMiddleware,
        )(createStore);
}

const store = createStoreWithMiddleware(todos);

export default store