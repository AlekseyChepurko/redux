/**
 * Created by Алексей on 21.06.2017.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import promisesMiddleware from './midlewares/promises'
import * as reducers from './reducers/'
import logger from 'redux-logger'


const createStoreWithMiddleware =
    applyMiddleware(
        promisesMiddleware,
        logger
    )(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer, {
    issue: [],
    counter: 0
});

export default store