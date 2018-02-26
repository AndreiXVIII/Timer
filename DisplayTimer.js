import React, {Component} from 'react'

class DisplayTimer extends Component{
	render() {
		if (this.props.timeLeft === 0) {
			document.getElementById('end').play()
		}
		if (this.props.timeLeft === 0 || this.props.timeLeft === null) {
			return <div></div>
		}
		return(
			<h1>
				Осталось времени: {this.props.timeLeft}
			</h1>
		)
	}
}

export default DisplayTimer