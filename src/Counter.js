import React from 'react'
import { connect } from 'react-redux'
const Counter = (props) => {
  return (
    <div>
      <h1>This is the Counter</h1>
      <p>Counter:{props.count}</p>
      <button onClick={props.onIncreamentClick}>Increament</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log('ddddddddddd', state)
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreamentClick: () => {
      console.log('click')
      const action = {
        type: 'INCREMENT'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)