import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { object, string, InferType } from "yup";

const formSchema = object().shape({
  newQuestion: 
    string().min(2).trim().required("Must include question!"),
  newTrueAnswer: 
    string().min(2).trim().required("Must include True answer!"),
  newFalseAnswer: 
    string().min(2).trim().required("Must include False answer!")
})


export function Form(props) {

  const checkValues = () => {
    if(props.form.newQuestion.trim() && props.form.newTrueAnswer.trim() && props.form.newFalseAnswer.trim()){
      return false
    }else{
      return true
    }
  }


  const onChange = evt => {
    props.inputChange(evt)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.resetForm()
    const formData = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer
    }
    props.postQuiz(formData)

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2 onClick={() => console.log(props.form)}>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={props.form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={props.form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={props.form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={checkValues()}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
