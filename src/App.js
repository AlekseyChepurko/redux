/**
 * Created by Алексей on 22.06.2017.
 */

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {loadIssues} from './actions'
class App extends Component {
    handleClick(){
        this.props.loadIssues();
    }
    render(){
        return (
            <div>
                <div>Content is here. {this.props.counter} </div>
                <button onClick={this.handleClick.bind(this)}>Load issues</button>
                <ul>
                    {this.props.issue.map((item, key) => <li key={key}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {counter: state.counter, issue: state.issue}},
    (dispatch)=> {
        return bindActionCreators({loadIssues}, dispatch);
    }
)(App)