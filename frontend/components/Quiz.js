import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'

export function Quiz(props) {

  if(!props.quiz){
    useEffect(() => {
      props.fetchQuiz()
    }, [])

  }

  const submit = () => {
    if(props.selected){
      const answer = {
        quiz_id: props.quiz.quiz_id,
        answer_id: props.selected.answer_id
      }
      props.postAnswer(answer)
    }
  }
   
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              {props.quiz.answers.map((answer,idx) => {
                return(
                  <div className={props.selected === answer ? 'answer selected' : 'answer'} key={idx}>
                    {answer.text}
                    <button onClick={() => {props.selectAnswer(answer)}}>
                      {props.selected === answer ? 'SELECTED' : 'select'}
                    </button>
                  </div>
                )
              })}
            </div>

            <button id="submitAnswerBtn" onClick={() => submit()} disabled={props.selected ? false : true}>Submit answer</button>
          </>
        ) :'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selected: state.selectedAnswer
  }

}

export default connect(mapStateToProps,{fetchQuiz, selectAnswer, postAnswer})(Quiz)
