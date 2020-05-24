import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import NavBar from './NavBar'
import Login from './Login'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <div>
            <Route path='/' component={Login}/>
          </div>
        </div>
      </Router>
      
    )
  }
}

export default connect()(App);
