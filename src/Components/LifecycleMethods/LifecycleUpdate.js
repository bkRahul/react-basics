import React, { Component } from 'react';

export default class LifecycleUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Satya"
		}
		console.log("Inside the LifecycleUpdate constructor()");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("Inside the LifecycleUpdate static getDerivedStateFromProps()");		
		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Inside the LifecycleUpdate shouldComponentUpdate()");		
		console.log("nextProps", nextProps);
		console.log("nextState", nextState);
		return true;
	}

	getSnapshopBeforeUpdate(prevProps, prevState) {
		console.log("Inside the LifecycleUpdate getSnapshopBeforeUpdate()");		
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log("Inside the LifecycleUpdate componentDidUpdate()");		

		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		console.log("snapShot", snapShot);		
	}


	componentDidMount() {
		console.log("Inside the LifecycleUpdate componentDidMount()");
	}


	render() {
		console.log("Inside the LifecycleUpdate render()");
		return (
			<div>
				<h1>Update Lifecycle</h1>
			</div>
		);
	}
}
