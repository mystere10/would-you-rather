import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component {

    state={
        value: '',
        toHome: false
    }

    makeOptions(){
        const optionArray = []
        const users = this.props.userNames

        if(users.length !== 0){
            for(let i in users){
                optionArray.push(<option key={i} value={users[i]} className='user-option'>{users[i]}</option>)
            }
            return optionArray
        }
    }

    onChange = (value) => {
        this.setState({value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const {setAuthedUser} = this.props
        const authUser = this.state.value
        new Promise((res, rej) => {
            setTimeout(() => res(), 500);
        }).then(() => setAuthedUser(authUser));

        this.setState({toHome: authUser !== null ? true : false})
    }
    render() {
        const {toHome} = this.state
        const {authedUser} = this.props
        if(toHome === true && authedUser !== null){
            return <Redirect to='/' />
        }
        
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>Login</label>
                    <select onChange={(e) => this.onChange(e.target.value)}>
                        <option>Select user</option>
                        {this.makeOptions()}
                    </select>
                    <button className='btn'>Sign in</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        authedUser,
        userNames: Object.keys(users),
    }
}

export default connect(mapStateToProps, {setAuthedUser})(Login)
