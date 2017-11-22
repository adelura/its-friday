import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
	render() {
		return (
			<header>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/movies">Movies</Link></li>
					<li><Link to="/gifs">Gifs</Link></li>
				</ul>
			</header>
		)
	}
}
