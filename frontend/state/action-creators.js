// ❗ You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
  SET_IS_FETCHING,
  SET_ERROR,
}
  from './action-types'
import axios from 'axios'


//wheel functionality finished
export function moveClockwise() {
  return({type: MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() {
  return ({type: MOVE_COUNTERCLOCKWISE})
 }
//wheel functionality finished

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setIsFetching(false));
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get(`http://localhost:9000/api/quiz/next`)
    .then(res => {
      console.log(res.data)
      dispatch(setQuizIntoState(res.data))
    }, (error) => {
      dispatch(setError(error.message))
    })
}

const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING, payload: isFetching
  }
}

const setError = (error) => {
  return {
    type: SET_ERROR, payload: error
  }
}

const setQuizIntoState = (data) => {
  return {
    type: SET_QUIZ_INTO_STATE, payload: data
  }
}




export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
