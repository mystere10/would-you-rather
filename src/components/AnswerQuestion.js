import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AnswerForm from './AnswerForm'

class AnswerQuestion extends Component {
 
    render() {
        const {authedUser, questions, users} = this.props

        const {question_id} = this.props.match.params

        if (!this.props.location.state || !questions[question_id]) return <Redirect to='/question'/>

        const {qid, category, author, avatar, optionOne, optionTwo} = this.props.location.state

        const numberOfUsers = Object.keys(users).length
        const optionOneLength = questions[qid].optionOne.votes.length
        const optionTwoLength = questions[qid].optionTwo.votes.length

        const optionOneVote = questions[qid].optionOne.votes.includes(authedUser) ? 'voted option-box' : 'option-box'
        const optionTwoVote = questions[qid].optionTwo.votes.includes(authedUser) ? 'voted option-box' : 'option-box'

        const optOneVotes = optionOneLength / numberOfUsers
        const optionOneToHundred = optOneVotes * 100
        const percentage1 = optionOneToHundred.toFixed(2) + '%'

        const optTwoVotes = optionTwoLength / numberOfUsers
        const optionTwoToHundred = optTwoVotes * 100
        const percentage2 = optionTwoToHundred.toFixed(2) + '%'        

        return (            
            <div className="results">
                {category === 'answered' ? (
                    <div>
                        <div className="author">Asked by {author}</div>
                            <img 
                                src={avatar}
                                alt={`Avatar of ${author}`}
                                className='avatar'
                            />
                            <div className="view-result">
                                <label id="title">Results</label>
                                <div className={optionOneVote} >
                                    <label>{optionOne.text}</label>
                                    <div className="status-bar-back">
                                        <div style={{backgroundColor: "#16a085", height: "24px", width: percentage1}}>
                                            <div className="percentage">{percentage1}</div>
                                        </div>
                                    </div>
                                    <p>{optionOneLength} out of {numberOfUsers}</p>
                                </div>
                                <div className={optionTwoVote}>
                                    <label>{optionTwo.text}</label>
                                    <div className="status-bar-back">
                                        <div style={{backgroundColor: "#16a085",  height: "24px", width: percentage2}}>
                                            <div className="percentage">{percentage2}</div>
                                        </div>
                                    </div>
                                    <p>{optionTwoLength} out of {numberOfUsers}</p>
                                </div>
                            </div>
                    </div>
                ):(
                    <AnswerForm 
                        qid={qid} 
                        author={author} 
                        avatar={avatar} 
                        optionOne={optionOne} 
                        optionTwo={optionTwo}
                    />
                )}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        questions,
        users
    }
}


export default connect(mapStateToProps)(AnswerQuestion)
