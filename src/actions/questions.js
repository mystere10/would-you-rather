import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
import {saveQuestonToUser} from '../actions/users'


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

function saveAnswer(authedUser, qid, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
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
            dispatch(saveQuestonToUser(quest))
        }).then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(saveAnswer(authedUser, qid, answer))
        return saveQuestionAnswer(authedUser, qid, answer)
            .catch(e => {
            console.log('An error occured', e);
        });
    }
}
