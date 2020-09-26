import React, { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			textareaValue: "",
			selectValue: "react"
		}
		this.inputChangeHandler = this.inputChangeHandler.bind(this)
		this.textareaChangeHandler = this.textareaChangeHandler.bind(this)
		this.selectChangeHandler = this.selectChangeHandler.bind(this)
	}

	inputChangeHandler(event) {
		this.setState({
			inputValue: event.target.value
		})
	}

	textareaChangeHandler(event) {
		this.setState({
			textareaValue: event.target.value
		})
	}

	selectChangeHandler(event) {
		this.setState({
			selectValue: event.target.value
		})
	}	
	render() {
		console.log(this.state.selectValue);
		return (
			<div>
			<h1>Text Input</h1>
			<input type="text" value={this.state.inputValue} onChange={this.inputChangeHandler} ></input>

			<h1>Textarea Input</h1>
			<textarea value={this.state.textareaValue} onChange={this.textareaChangeHandler}></textarea>

			<h1>Select Input</h1>
			<select value={this.state.selectValue} onChange={this.selectChangeHandler}>
			<option value="react">React</option>
			<option value="vue">Vue</option>
			<option value="angular">Angular</option>
			</select>
			</div>
		);
	}
}
