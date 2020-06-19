import React, { Component } from 'react'
import {connect} from 'react-redux'
import ViewPollBtn from './ViewPollBtn'
class Question extends Component {
    state = {
        ans_button: 'answered',
        unans_button: 'unaswered'
    }
    render() {     
        const { ans_button, unans_button} = this.state
        const {userQuestion, unanswered} = this.props
        const { id, name, author, avatarURL, optionOne, optionTwo } = userQuestion
        return (
                <div className='question'>
                {unanswered === true ? (
                    <div>
                        <div className="author">{name}</div>
                            <img 
                                src={avatarURL}
                                alt={`Avatar of ${author}`}
                                className='avatar'
                            />
                        <div className="view-poll">
                            <p id="title">Would you rather</p>
                            <p>...{optionOne.text}</p>
                            <ViewPollBtn 
                                qid={id} 
                                ans={unans_button} 
                                optionOne={optionOne} 
                                optionTwo={optionTwo} 
                                author={name}
                                avatar={avatarURL}
                            />
                        </div>
                    </div>
                ):(
                    <div>
                        <div className="author">{name}</div>
                            <img 
                                src={avatarURL}
                                alt={`Avatar of ${author}`}
                                className='avatar'
                            />
                        <div className="view-poll">
                            <p id="title">Would you rather</p>
                            <p>...{optionOne.text}</p>
                            {/* <p>{optionTwo.text}</p> */}
                            <ViewPollBtn qid={id} 
                                ans={ans_button} 
                                optionOne={optionOne} 
                                optionTwo={optionTwo} 
                                author={name}
                                avatar={avatarURL}
                            />
                        </div>
                    </div>
                )}
                </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}) {
    const userQuestion = questions[id]
    return {
        authedUser,
        userQuestion
    }
}

export default connect(mapStateToProps)(Question)
