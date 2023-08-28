import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'


const Wheel = (props) => {
  return (
    <div id="wrapper">
      <div id="wheel">
        {props.wheelState.map(item => {
         return <div key={item.wheelIndex} className={item.cogState} style={{ "--i": item.wheelIndex }}>{item.wheelValue}</div>
        })}
      </div>
      {/* --i is a custom CSS property, no need to touch that nor the style object */}

      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    wheelState: state.wheel.wheelState
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);