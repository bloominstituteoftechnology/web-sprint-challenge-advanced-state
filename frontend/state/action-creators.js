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
  RESET_SELECTED_STATE
}
  from './action-types'
import axios from 'axios'

//wheel functionality finished
export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return ({ type: MOVE_COUNTERCLOCKWISE })
}
//wheel functionality finished

export function selectAnswer(id) {
  return { type: SET_SELECTED_ANSWER, payload: id }
}

export function setMessage(message) { 
  return {
    type: SET_INFO_MESSAGE, payload: message
  }
}

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

const resetSelectedState = () => {
  return {
    type: RESET_SELECTED_STATE
  }
}


export const postAnswer = (data) => dispatch => {
  // On successful POST:
  // - Dispatch an action to reset the selected answer state
  // - Dispatch an action to set the server message to state
  // - Dispatch the fetching of the next quiz
  const answer_id = data.answers.filter((elem) => elem.selectValue === "SELECTED")[0].answer_id
  axios.post(`http://localhost:9000/api/quiz/answer`, {"quiz_id": data.quiz_id, "answer_id": answer_id}).then(res => {
    console.log(res)
    dispatch(setMessage(res.data.message))
    dispatch(resetSelectedState());
  })

}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form


    // axios.post(`http://localhost:9000/api/quiz/new`, {
    //   "question_text": data.question, "true_answer_text": data.answers[0].answer_id,
    //   "false_answer_text": data.answers[1].answer_id
    // }).then(res => {
    //   console.log(res)
    //   dispatch(resetSelectedState());
    // })


  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
