import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

export function Wheel(props) {
  const style = [1,2,3,4,5,6]
  
  return (
    <div id="wrapper">
      <div id="wheel">
        {style.map((num,idx) => {
          return (
            <div key={num} className={idx === props.wheel ? 'cog active' : 'cog'} style={{ "--i": `${idx}` }}>{idx === props.wheel ? 'B' : ''}</div>
          )
        })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps,{moveClockwise,moveCounterClockwise})(Wheel)