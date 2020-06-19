import {GET_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER} from '../actions/questions'

export default function questions(state={}, action){
    switch(action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}