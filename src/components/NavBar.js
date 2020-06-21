import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'
class NavBar extends Component {

    resetAuthUser = () => {
        const {dispatch} = this.props
        dispatch(setAuthedUser(null))
    }
    render() {
        const {user} = this.props
        return (
            <div className='nav-bar'>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/add' activeClassName='active'>New question</NavLink>
                    </li>

                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>Leader board</NavLink>
                    </li>

                    <li>
                        Hello, {user.name}
                        <img 
                            src={user.avatarURL}
                            alt={`Avatar of ${user.author}`}
                            className='avatarNav'
                        />
                    </li>

                    <li>
                        <button onClick={this.resetAuthUser}>Logout</button>
                    </li>
                </ul>
            </div>
        )
    }
}


function mapStateToprops({authedUser, users}){
    const user = users[authedUser]
    return {
        user
    }
}

export default connect(mapStateToprops)(NavBar)
