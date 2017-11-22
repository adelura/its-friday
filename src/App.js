import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom';
import './App.css';

import { Header } from './header/Header';
import { Home } from './home/Home';

import { Movies } from './movies/Movies';
import { Gifs } from  './gifs/Gifs';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div className="container">
						<Header />
						<Route exact path="/" component={Home} />
						<Route path="/movies" component={Movies} />
						<Route path="/gifs" component={Gifs} />
					</div>
				</Router>
			</div>
		);
		}
	}

export default App;
