import React from 'react'

interface CounterProps { }

export default class Counter extends React.Component<CounterProps, any> {

	constructor(props: CounterProps) {
		super(props)
		this.state = {
			likes: 0,
			username: ''
		}
	}

	likePost = () => {
		this.setState({
			likes: this.state.likes + 1
		})
	}

	dislikePost = () => {
		this.setState({
			likes: this.state.likes - 1
		})
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			username: event.target.value
		})
		console.log(this.state)
	}

	render() {
		return (
			<>
				<div>Likes: {this.state.likes} - Username: {this.state.username}</div>
				<button onClick={this.likePost}>Like</button>
				<button onClick={this.dislikePost}>Dislike</button>
				<input value={this.state.username} onChange={this.handleChange}></input>
			</>
		)
	}
}