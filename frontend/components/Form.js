import React from 'react'
import { connect } from 'react-redux'
import { inputChange, postQuiz, setMessage, resetForm } from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    props.inputChange(evt)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.newQuestion, props.newTrueAnswer, props.newFalseAnswer)
    props.setMessage(`Congrats: "${props.newQuestion}" is a great question!`)
    props.resetForm();
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.newFalseAnswer} />
      <button  onClick={(evt) => onSubmit(evt)} id="submitNewQuizBtn" disabled={props.newQuestion && props.newFalseAnswer && props.newTrueAnswer ? false : true}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
  }
}


export default connect(mapStateToProps, {inputChange, postQuiz, setMessage, resetForm})(Form)
