// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render(){
    return(
      <div>
<<<<<<< HEAD
        if (secondsLeft == 0) {
=======
        if ({this.state.secondsLeft} == 0) {
>>>>>>> 5022892154bb26cee027223ce17eee95921b4dd3
          <p>Boom!</p>
        } else {
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
      </div>
    )
  }
}
