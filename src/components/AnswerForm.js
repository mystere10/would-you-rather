import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleSaveAnswer, } from '../actions/questions'
import {handleSaveAnswerToUser} from '../actions/users'

class AnswerForm extends Component {
    state= {
        qid: '',
        answer: '',
    }

    handleChange = (e, qid) => {
        e.preventDefault()
        this.setState({ qid })
        this.setState({ answer: e.target.value})
    }

    handleSubmit = (e, id, optionOne, optionTwo, author, avatar) => {
        e.preventDefault()
        const {qid, answer} = this.state
        const {dispatch} = this.props

        dispatch(handleSaveAnswer(qid, answer))
        dispatch(handleSaveAnswerToUser(qid, answer))

        setTimeout(() => {
            this.props.history.push({
                pathname: `/questions/${id}`,
                state: {qid: id, optionOne: optionOne, optionTwo: optionTwo, category: 'answered', author: author, avatar: avatar}
            })
        }, 1000);
    }
    render() {
        const {qid, author, avatar, optionOne, optionTwo} = this.props

        return (
            <div>
                <div className="author">{author} asks</div>
                    <img 
                        src={avatar}
                        alt={`Avatar of ${author}`}
                        className='avatar'
                    />
                    <form onSubmit={(e) => this.handleSubmit(e, qid, optionOne, optionTwo, author, avatar)} className="answer-form">
                        <label id="title">Would you rather</label>
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="question"
                                    value="optionOne" 
                                    onChange={(e) => this.handleChange(e, qid)}
                                />
                            </label><label>{optionOne.text}</label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="radio"
                                    name="question" 
                                    value="optionTwo"
                                    onChange={(e) => this.handleChange(e, qid)}
                                />
                            </label><label>{optionTwo.text}</label>
                        </div>
                        <button className="btn">
                            Submit
                        </button>
                    </form>
                </div>
        )
    }
}

export default withRouter(connect()(AnswerForm))
