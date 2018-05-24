import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: Number.parseInt(props.age, 10),
			status: 0,
			homeLink: props.initialName
		}
		setTimeout(() => {
			this.setState({
				status: 1
			})
		}, 3000)
		console.log("Constructor")
	}
	growOlder() {
		this.setState({
			age: this.state.age + 3
		})
	}

	handleGreet() {
		this.props.greet(this.state.age)
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink)
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		})
	}

	componentWillMount() {
		console.log("ComponentWillMount")
	}

	componentDidMount() {
		console.log("ComponentDidMount")
	}

	componentWillReceiveProps() {
		console.log("ComponentWillReceiveProps")
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("ComponentShouldUpdate", nextProps, nextState)
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("ComponentWillUpdate", nextProps, nextState)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("ComponentDidUpdate", prevProps, prevState)
	}

	componentWillUnmount() {
		console.log("ComponentWillUnmount")
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-1 col-xs-offset-11">
						<div>我姓{this.props.user.name}名{this.props.name}</div>
						<div>{this.state.age}岁了</div>
						<button className="btn btn-primary" onClick={this.growOlder.bind(this)}>变老</button>
						<p>Status：{this.state.status}</p>
						<h4>我有以下爱好：</h4>
						<ul>
							{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
						</ul>
						<hr />
						<button className="btn btn-primary" onClick={this.handleGreet.bind(this)}>父组件方法传递给子组件</button>
						<hr />
						<input
							type="text" value={this.state.homeLink}
							onChange={(event) => this.onHandleChange(event)}
						/>
						<button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>子组件传递给子组件</button>
					</div>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	greet: PropTypes.func,
	initialName: PropTypes.string
}				