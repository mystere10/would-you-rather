import {saveQuestionAnswer} from '../utils/api'

export const GET_USERS = 'GET_USERS'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER'


export function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

function saveAnswerToUser(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function saveQuestonToUser({id, author}) {
    return {
        type: SAVE_QUESTION_TO_USER,
        id,
        author
    }
}

export function handleSaveAnswerToUser(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(saveAnswerToUser(authedUser, qid, answer))
        return saveQuestionAnswer(authedUser, qid, answer)
            .catch(e => {
            console.log('An error occured', e);
        });
    }
}
