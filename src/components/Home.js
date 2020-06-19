import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Home extends Component {

    state={
        unanswered: true
    }

    handleUnAnswered = () => {
        this.setState({unanswered: true})
    }

    handleAnswered = () => {
        this.setState({unanswered: false})
    }


    render() {
        const {answeredQuestion, unAnsweredQuestion} = this.props
  
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="list-btn">
                        <button onClick={this.handleUnAnswered} className="a-btn">Unanswered questions</button>
                        <button onClick={this.handleAnswered} className="a-btn">Answered questions</button>
                    </div>
                </div>
                {this.state.unanswered === true ? (
                    <ul className='questions-list'>
                        {answeredQuestion.map((question) => (
                            <li key={question.id}>
                                <Question id={question.id} unanswered={this.state.unanswered}/>
                            </li>
                        ))}
                    </ul>
                ):(
                    <ul className='questions-list'>
                        {unAnsweredQuestion.map((question) => (
                            <li key={question.id}>
                                <Question id={question.id} unanswered={this.state.unanswered}/>
                            </li>
                        ))}
                    </ul>
                )}
            </Fragment>
        )
    }
}

function mapStateToProps({users, questions, authedUser}){
    const userAnswered = Object.keys(users[authedUser].answers)

    const answeredQuestion = Object.values(questions)
        .filter(question => !userAnswered.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

    const unAnsweredQuestion = Object.values(questions)
        .filter(question => userAnswered.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

    

    for (let u in users){
        answeredQuestion.forEach((a) => {
            if(u === a.author){
                a.name = users[u].name
                a.avatarURL = users[u].avatarURL
            }
        })
    }

    for (let u in users){
        unAnsweredQuestion.forEach((a) => {
            if(u === a.author){
                a.name = users[u].name
                a.avatarURL = users[u].avatarURL
            }
        })
    }

    return {
        authedUser,
        answeredQuestion,
        unAnsweredQuestion
    }
}

export default connect(mapStateToProps)(Home)