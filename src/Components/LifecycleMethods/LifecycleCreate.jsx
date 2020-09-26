import React, { Component } from 'react';
import LifecycleUpdate from './LifecycleUpdate.js';

export default class LifecycleCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Rahul"
		}
		console.log("Inside the LifecycleCreate constructor()");
this.changeStateHandler = this.changeStateHandler.bind(this)

	}

	static getDerivedStateFromProps(props, state) {
		console.log("Inside the LifecycleCreate static getDerivedStateFromProps()");		
		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Inside the LifecycleCreate shouldComponentUpdate()");		
		console.log("nextProps", nextProps);
		console.log("nextState", nextState);
		return true;
	}

	getSnapshopBeforeUpdate(prevProps, prevState) {
		console.log("Inside the LifecycleCreate getSnapshopBeforeUpdate()");		
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log("Inside the LifecycleCreate componentDidUpdate()");		

		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		console.log("snapShot", snapShot);		
	}


	componentDidMount() {
		console.log("Inside the LifecycleCreate componentDidMount()");
	}



	changeStateHandler() {
	    this.setState((prevState) => ({
	        name: "Satya"
	    }))
	}
	render() {
		console.log("Inside the LifecycleCreate render()");
		return (
			<div>
				<h1>Creation Lifecycle</h1>
				<button onClick={this.changeStateHandler}>Change State</button>
				<p>{this.state.name}</p>
 		{<LifecycleUpdate/>}
			</div>
		);
	}
}
