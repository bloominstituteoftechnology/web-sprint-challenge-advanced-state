import React from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'
function Quiz(props) {
  if (!props.isFetching){
    props.fetchQuiz();
  }
  //NEXT STEP HANDLE CLICK
  return (
    <div id="wrapper">

      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.isFetching ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
            {props.quiz.answers.map(answer => {
              return <div key={answer.text} className="answer">{answer.text}
              <button>{props.selectValue}</button>
              </div>
            })}
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz.quiz,
    isFetching: state.quiz.isFetching,
    error: state.quiz.error,
    selectValue: state.quiz.selectValue
  }
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz);