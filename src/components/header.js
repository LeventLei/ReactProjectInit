import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-1 col-xs-offset-11">
						<div>我姓{this.props.user.name}名{this.props.name}</div>
						<div>{this.props.age}岁了</div>
						<h4>我有以下爱好：</h4>
						<ul>
							{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
						</ul>
						<div>{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	children: PropTypes.element.isRequired
}