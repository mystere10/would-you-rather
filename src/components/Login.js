import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {

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
    render() {
        
        return (
            <div className='container'>
                <form >
                    <label>Login</label>
                    <select>
                        {this.makeOptions()}
                    </select>
                    <button className='btn'>Sign in</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        userNames: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)
