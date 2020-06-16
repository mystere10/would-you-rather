import {saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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
