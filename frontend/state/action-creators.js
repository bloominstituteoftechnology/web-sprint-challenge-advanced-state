// plain action creators
export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, reset the quiz state so the "Loading next quiz..." message can display
    // On successful GET:
    // - Load the quiz into the quiz state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Reset the selected answer state
    // - Set the message from the server in the appropriate state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Set a message in state
    // - Reset the form
  }
}
// On promise rejections, use log statements or breakpoints, and put an appropriate erro message in state.
