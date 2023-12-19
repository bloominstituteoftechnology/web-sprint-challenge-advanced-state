// ❗ You don't need to add extra reducers to achieve MVP
import { INPUT_CHANGE, MOVE_CLOCKWISE,MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'
import { combineReducers } from 'redux'
import axios from 'axios'


const initialWheelState = 0
const wheel = (state = initialWheelState, action) => {
  switch(action.type){
    case MOVE_CLOCKWISE:
      if(state === 5){
        return state = initialWheelState
      }else{
        return state + 1
      }
    case MOVE_COUNTERCLOCKWISE:
      if(state === 0){
        return state = 5
      }else{
        return state - 1
      }
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE:
      if(action.payload === undefined){
        return( state = initialQuizState)}
    case SET_QUIZ_INTO_STATE:
      if(action.payload){
        return ( state = action.payload)
      }
    default:
      return state
  }

}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return state = action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
 switch(action.type){
  case SET_INFO_MESSAGE:
    if(action.payload === undefined){
      return state = initialMessageState
    }
  case SET_INFO_MESSAGE:
    return state = action.payload
  default:
    return state
 }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id] : action.payload.value
      }
    case RESET_FORM:
      return state = initialFormState
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
