import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

function NavBar() {
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
                    <NavLink to='/leader-board' activeClassName='active'>Leader board</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default connect()(NavBar)
