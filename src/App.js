import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './screens/hompage/homepage.component';

const HatComponent = () => <div>Shop Hats</div>;

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hats' component={HatComponent} />
			</Switch>
		</div>
	);
}

export default App;
