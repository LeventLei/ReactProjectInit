import React, { Component } from 'react';
import './App.css';
import Header from './components/header'

class App extends Component {
	render() {
		const name = '王';
		const age = '15';
		const user = {
			name: '雷',
			hobbies: ['sports', 'swimming']
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-1 col-xs-offset-11">
						<Header name={name} age={age} user={user}>
							<div>I am child</div>
						</Header>
						<h1>hello !!</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
