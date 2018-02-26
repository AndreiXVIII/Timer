import React, {Component} from 'react'
import ButtonTimer from './ButtonTimer'
import DisplayTimer from './DisplayTimer'

class Timer extends Component{
	constructor(props) {
		super(props)
		this.startTimer = this.startTimer.bind(this)
		this.state = {
			timeLeft: null,
			timer: null
		}
	}

	render() {
		return(
			<div>
				<h2> Timer </h2>
				<div>
					<ButtonTimer time='5' startTimer={this.startTimer} />
					<ButtonTimer time='10' startTimer={this.startTimer} />
					<ButtonTimer time='15' startTimer={this.startTimer} />
				</div>
				<DisplayTimer timeLeft={this.state.timeLeft} />
				<audio id='end' preload='auto' src='./media/Pop-up'></audio>
			</div>
		)
	}

	startTimer(timeLeft) {
		clearInterval(this.state.timer)
		let timer = setInterval(()=> {
			var timeLeft = this.state.timeLeft - 1
			if (timeLeft === 0) {
				clearInterval(timer)
			}
			this.setState({
				timeLeft: timeLeft
			})
		}, 1000)
		return this.setState({
			timeLeft: timeLeft,
			timer: timer
		})
	}
}

export default Timer