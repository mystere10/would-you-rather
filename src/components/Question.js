import React, { Component } from 'react'
import {connect} from 'react-redux'
class Question extends Component {
    render() {     
        
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
                            <button className="btn">View Poll</button>
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
                            <button className="btn">View Poll</button>
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
