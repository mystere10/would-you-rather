import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {

    state={
        question1: '',
        question2:''
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name
        const {dispatch} = this.props
        this.setState({
            [name]: ''
        })
        const {question1, question2} = this.state

        dispatch(handleAddQuestion(question1, question2))
    }
    render() {
        const {question1, question2} = this.state
        const {auth_user} = this.props
        const {name, avatarURL} = auth_user

        return (
            <div className="question">
                <form onSubmit={this.handleSubmit}>
                    <label id="title">Would you rather</label>
                    <div>
                        <label>
                            <input 
                                type="text" 
                                name="question1"
                                placeholder="Enter option one text here"
                                value={this.state.question1} 
                                onChange={this.handleChange}
                                className="question_field"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="text" 
                                name="question2" 
                                placeholder="Enter option two text here"
                                value={this.state.question2} 
                                onChange={this.handleChange}
                                className="question_field"
                            />
                        </label>
                    </div>
                    <button className="btn-b" disabled={question1 === '' || question2 === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}) {
    const auth_user = users[authedUser]
    return{
        auth_user
    }
}

export default connect(mapStateToProps)(NewQuestion);