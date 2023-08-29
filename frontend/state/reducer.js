// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

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
  RESET_SELECTED_STATE,
  CLEAR_INFO_MESSAGE
}
  from './action-types'
//wheel functionality done
const initialWheelState = {
  wheelState:
    [{
      wheelIndex: 0,
      wheelValue: "B",
      cogState: "cog active",
    }, {
      wheelIndex: 1,
      wheelValue: "",
      cogState: "cog",
    }, {
      wheelIndex: 2,
      wheelValue: "",
      cogState: "cog",
    }, {
      wheelIndex: 3,
      wheelValue: "",
      cogState: "cog",
    }, {
      wheelIndex: 4,
      wheelValue: "",
      cogState: "cog",
    }, {
      wheelIndex: 5,
      wheelValue: "",
      cogState: "cog",
    },
    ],
  activeWheel: 0
}
function wheel(state = initialWheelState, action) {
  let currentWheel = state.activeWheel;
  switch (action.type) {
    case MOVE_CLOCKWISE:
      if (currentWheel === 5) {
        currentWheel = 0
      } else {
        currentWheel += 1
      }
      return {
        ...state,
        wheelState: state.wheelState.map(item => {
          if (currentWheel === item.wheelIndex) {
            return {
              ...item,
              cogState: "cog active",
              wheelValue: "B"
            }
          } else {
            return {
              ...item,
              cogState: "cog",
              wheelValue: ""
            }
          }
        }),
        activeWheel: currentWheel
      }
    case MOVE_COUNTERCLOCKWISE:
      if (currentWheel === 0) {
        currentWheel = 5
      } else {
        currentWheel -= 1
      }
      return {
        ...state,
        wheelState: state.wheelState.map(item => {
          if (currentWheel === item.wheelIndex) {
            return {
              ...item,
              cogState: "cog active",
              wheelValue: "B"
            }
          } else {
            return {
              ...item,
              cogState: "cog",
              wheelValue: ""
            }
          }
        }),
        activeWheel: currentWheel
      }
    default:
      return state
  }
}
//wheel functionality done

const initialQuizState = {
  quiz: "",
  isFetching: false,
  error: "",
  buttonState: true,
  // infoMessage: ""
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        quiz: {
          ...action.payload,
          answers: action.payload.answers.map((element) => {
            return { ...element, selectValue: "Select", answerHighlight: false }
          })
        },
        isFetching: true,
        error: "",
        buttonState: true
      }
    case SET_ERROR:
      return {
        ...state,
        isFetching: true,
        error: action.payload
      }
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        quiz: {
          ...state.quiz, answers: state.quiz.answers.map(element => {
            if (action.payload === element.answer_id) {
              return { ...element, selectValue: "SELECTED", answerHighlight: true }
            } else {
              return { ...element, selectValue: "Select", answerHighlight: false }
            }
          })
        },
        selectValue: state.quiz.answers.selectValue,
        isFetching: true,
        error: "",
        buttonState: false,
        infoMessage: ""
      }
    case RESET_SELECTED_STATE:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          answers: state.quiz.answers.map(element => {
            return { ...element, selectValue: "Select", answerHighlight: false }
          })
        },
        buttonState: true
      }
    // case SET_INFO_MESSAGE:
    //   return {
    //     ...state,
    //     infoMessage: action.payload
    //   }
    default:
      return state
  }
}

const initialMessageState = {
  infoMessage: ""
}
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return {
        infoMessage: action.payload
      }
    case CLEAR_INFO_MESSAGE:
      return (state = initialMessageState)
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
  const evt = action.payload;
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [evt.target.id]: evt.target.value
      }
    case RESET_FORM:
      return (state = initialFormState)
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, form, infoMessage })
