import React, {Component} from 'react'

class ButtonTimer extends Component{
	render() {
		return(
			<div>
				<button onClick={this.handleStart.bind(this)}> {this.props.time} секунд </button>
			</div>   
		)
	}

	handleStart() {
		return this.props.startTimer(this.props.time)
	}
}

export default ButtonTimer