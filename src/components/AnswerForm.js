import React, { Component } from 'react'

export default class AnswerForm extends Component {
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
                    <form onSubmit={this.handleSubmit} className="answer-form">
                        <label id="title">Would you rather</label>
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="question"
                                    // value={this.state.question1} 
                                    onChange={this.handleChange}
                                    // className="question_field"
                                />
                            </label><label>{optionOne.text}</label>
                        </div>
                        <div>
                            <label>
                                <input 
                                    type="radio"
                                    name="question" 
                                    // value={this.state.question2} 
                                    onChange={this.handleChange}
                                    // className="question_field"
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
