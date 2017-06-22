/**
 * Created by Алексей on 21.06.2017.
 */
import {createStore} from 'redux'

export default function (state=0, action){
    switch (action.type){
        case 'INCREASE_COUNTER': {
            // return Object.assign({}, state, {counter: state.counter + 1});
            return  ++state;
        }
        case 'RESET_COUNTER': {
            // return Object.assign({}, state, {counter: 0});
            return 0;
        }
        default: {
            return state;
        }
    }
}
