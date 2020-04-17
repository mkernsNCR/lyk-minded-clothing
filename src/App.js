import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './screens/hompage/homepage.component';
import ShopPage from './screens/shop/shop.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
