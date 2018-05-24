import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Header from './components/header'

class App extends Component {
	constructor() {
		super();
		this.state = {
			homeLink: 'Home',
			homeMounted: true
		}
	}
	onGreet(age) {
		alert(age)
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		})
	}
	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		})
	}
	render() {
		const name = '王';
		const age = 15;
		const user = {
			name: '雷',
			hobbies: ['sports', 'swimming']
		}
		let homeCmp = "";
		if (this.state.homeMounted) {
			homeCmp = (
				<Home
					name={name}
					age={age}
					user={user}
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialName={this.state.homeLink}>
				</Home>
			)
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-1 col-xs-offset-11">
						{homeCmp}
						<h1>hello !!</h1>
						<Header homeLink={this.state.homeLink}></Header>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-xs-1 col-xs-offset-11">
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home Component</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
