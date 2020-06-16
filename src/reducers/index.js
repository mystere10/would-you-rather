import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import {reactReduxLoadingBar} from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    questions,
    loading: reactReduxLoadingBar
})