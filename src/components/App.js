import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import NavBar from './NavBar'
import Login from './Login'
import Home from './Home'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
    return (
      <Router>
        <div className="main-app">
            {authedUser === null ? (
              <Route render={() => (<Login />)}/>
            ) : (
              <Fragment>
                <NavBar />
                <Route exact path='/' component={Home}/>
              </Fragment>
            )}
          </div>
        </Router>
      
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
