import React from 'react';

export default class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0
		}
		this.incrementer = null;
	}

	handleStartClick = () => {
		this.incrementer = setInterval(() => this.setState({seconds: this.state.seconds+1}), 1000);
	}

	handleStopClick = () => {
		clearInterval(this.incrementer);
	}

	handleDecrementClick = () => {
		this.incrementer = setInterval(() => this.setState({seconds: this.state.seconds-1}), 1000);
	}

	handleResetClick = () => {
		clearInterval(this.incrementer);
		this.setState({seconds: 0});
	}

	render() {

		const stopwatchTime = (sec) => Math.floor(sec/60) + ":" + ("0" + sec % 60).slice(-2);

		return (
			<div className="mt6 mb4 pt4 pb5 measure center br2 bg-white" style={{
				boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}}>
				<div className="tc">
					<h2 className="dark-blue">STOPWATCH</h2>
					<h1 className="f1">{stopwatchTime(this.state.seconds)}</h1>
					<button className="b ph3 pv2 w-20 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						onClick={this.handleStartClick.bind(this)}>Start</button>
					<button className="b ml3 ph3 w-20 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						onClick={this.handleStopClick.bind(this)}>Stop</button><br/>
					<button className="b mt3 w-20 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						onClick={this.handleDecrementClick.bind(this)}>Decrement</button>
					<button className="b mt3 ml3 w-20 ph3 pv2 input-reset ba b--black bg-transparent grow pointer 
						f6 dib" onClick={this.handleResetClick.bind(this)}>Reset</button>
				</div>
			</div>
		);
	}
}