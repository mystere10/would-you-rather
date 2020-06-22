import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import NavBar from './NavBar'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import AnswerQuestion from './AnswerQuestion'
import loading from 'react-redux-loading'
import LeaderBoard from './LeaderBoard'
import NotFound from './NotFound'

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
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/add' component={NewQuestion}/>
                  <Route path='/question/:question_id' component={AnswerQuestion}/>
                  <Route path='/leaderboard' component={LeaderBoard}/>
                  <Route component={NotFound}/>
                </Switch>
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
