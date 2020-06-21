import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class ViewPollBtn extends Component {
    state = {
        votePanel: false
    }

    handleVotePanel = (e, id, optionOne, optionTwo, ans, author, avatar) => {
        e.preventDefault()
        this.props.history.push({
            pathname: `/question/${id}`,
            state: {qid: id, optionOne: optionOne, optionTwo: optionTwo, category: ans, author: author, avatar: avatar}
        })
    }
    render() {
        const {qid, optionOne, optionTwo, ans, author, avatar } = this.props
        return (            
            <div>
                <button className="btn" 
                    onClick={(e) => 
                    this.handleVotePanel(e, 
                    qid, 
                    optionOne, 
                    optionTwo, 
                    ans, 
                    author,
                    avatar
                    )}>
                    View Poll
                </button>
            </div>
        )
    }
}

export default withRouter(ViewPollBtn)
