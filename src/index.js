/**
 * Created by Алексей on 20.06.2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from './dansStore'
import {createStore} from 'redux'
import counter from './reducers/dans'
import {Provider} from 'react-redux'
import App from './App'
// import store from './state'


/*<Provider store={store}>*/
/*<App/>*/
/*</Provider>,*/

class TodoAdd extends  Component {
    render(){
        return(
            <div>
                    <input ref={node => { this.input = node}} type="text"/>
                    <button onClick={
                        ()=> {
                            if (this.input.value !== "") {
                                store.dispatch(
                                    {
                                        type: "ADD_TODO",
                                        index: store.getState().todos.length,
                                        text: this.input.value
                                    })
                            }
                            this.input.value = "";
                        }
                    }>+</button>
            </div>
        )
    }
}
const getVisibleTodos = (todos, filter)=>{
    switch (filter){
        case "SHOW_ACTIVE":
            return todos.filter(todo => !todo.completed ? todo : null);
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed ? todo : null);
        default:
            return todos;
    }
};
class ToDoList extends Component {
    render(){
        return(
            <ul>
                Todo list:
                {getVisibleTodos(this.props.todos, this.props.filter).map((item, key)=>
                    <li
                        style={{cursor: "pointer", textDecoration: item.completed ? "line-through" : "none"}}
                        key={key}
                        onClick={()=>{
                            store.dispatch({type: "TOGGLE_TODO", index: key})
                        }}>
                        {item.text}
                    </li>
                )}
            </ul>
        )
    }
}

class ShowFilter extends Component{
    render(){
        return(
            <div>
                <button onClick={()=>{store.dispatch({type:"SET_VISIBILITY_FILTER", filter: "SHOW_ALL"})}}>Show all</button>
                <button onClick={()=>{store.dispatch({type:"SET_VISIBILITY_FILTER", filter: "SHOW_ACTIVE"})}}>Show Active</button>
                <button onClick={()=>{store.dispatch({type:"SET_VISIBILITY_FILTER", filter: "SHOW_COMPLETED"})}}>Show Completed</button>
            </div>
        )
    }
}

const render = ()=>{
    ReactDOM.render(
        <div>
            <TodoAdd/>
            <ShowFilter filter={store.getState().visibilityFilter}/>
            <ToDoList todos={store.getState().todos} filter={store.getState().visibilityFilter}/>
        </div>
        ,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();
