import {saveQuestion, savaQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function saveAnswer(question) {
    return {
        type: ADD_QUESTION_ANSWER,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }).then((quest) => {
            dispatch(addQuestion(quest))
        }).then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return savaQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then((response) => {
            dispatch(saveAnswer(response))
        }).then(() => dispatch(hideLoading()))
    }
}
