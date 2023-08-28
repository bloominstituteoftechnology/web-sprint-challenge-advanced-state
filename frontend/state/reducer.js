// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import axios from 'axios';

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
  SET_IS_FETCHING,
  SET_ERROR
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
  selectValue: "Select"
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_IS_FETCHING: 
    return {
      ...state,
      isFetching: action.payload
    }
    case SET_QUIZ_INTO_STATE:
      return {...state,
        quiz: action.payload,
      isFetching: true,
      error: ""
      }
    case SET_ERROR: 
    return {
      ...state,
      isFetching: true,
      error: action.payload
    }
    case SET_SELECTED_ANSWER:
      return {}
    default:
      return state
  }
}

const initialSelectedAnswerState = {
  selectedAnswer: null,
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = {
  infoMessage: ""
}
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
