/**
 * Created by Алексей on 23.06.2017.
 */

import {combineReducers} from 'redux'
import todos from './dansTodos'
import visibilityFilter from './dansVisibilityFilter'

// const todo = (state, action) => {
//     switch (action.type){
//         case "ADD_TODO":
//             return {
//                 text: action.text,
//                 index: action.index,
//                 completed: false
//             };
//         case "TOGGLE_TODO":{
//             if (state.index !== action.index)
//                 return state;
//             return {
//                 ...state,
//                 completed: !state.completed
//             }
//         }
//         default: return state;
//     }
// };
//
//
// const todos = (state=[], action) => {
//     switch (action.type){
//         case "ADD_TODO": {
//             return [...state, todo(undefined, action)]
//         }
//         case "TOGGLE_TODO":{
//             return state.map(t => todo(t, action))
//         }
//         default: return state;
//     }
// };
//
// const visibilityFilter = (state = 'SHOW_ALL', action)=>{
//     switch (action.type){
//         case "SHOW_VISIBILITY_FILTER":
//             return action.filter;
//         default: return state;
//
//     }
// };
//
// export default function (state={}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }

export default combineReducers({
    todos,
    visibilityFilter
})