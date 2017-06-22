/**
 * Created by Алексей on 20.06.2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App'
import store from './state'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);

// store.subscribe( ()=>{
//         // console.log("New store", store.getState());
//     }
// );

// store.dispatch({
//     type: "INCREASE_COUNTER"
// });
//
// store.dispatch({
//     type: "INCREASE_COUNTER"
// });
//
//
