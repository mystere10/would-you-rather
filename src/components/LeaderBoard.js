import React, { Component } from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
    render() {

        const {users} = this.props
        const userInfo = []
        for (let user in users){
            const answeredQuestions = users[user].answers
            const askedQuestions = users[user].questions

            const sortIng = Object.keys(answeredQuestions).length + Object.keys(askedQuestions).length
            users[user].total =  sortIng
            users[user].answeredQuestions = Object.keys(answeredQuestions).length
            users[user].askedQuestions = askedQuestions.length
            userInfo.push(users[user])
        }

        const sortedArray = userInfo.sort((a,b) => b.total - a.total)
        return (
            <div className="question">
                <div>
                {sortedArray.length !== 0 && (
                    userInfo.map((user) => (
                        <div key={user.id} >
                            <div className="author">{user.name}</div>
                                <img 
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.author}`}
                                    className='avatar'
                                />
                            <div className="view-poll">
                                <p id="score">{user.total}</p>
                                <p >Answered questions {user.answeredQuestions}</p>
                                <hr/>
                                <p>Asked questions {user.askedQuestions}</p>
                            </div>
                        </div>
                    ))
                )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)
