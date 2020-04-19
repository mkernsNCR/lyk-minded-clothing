import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './screens/hompage/homepage.component';
import ShopPage from './screens/shop/shop.component';
import SignInAndSignUp from './screens/sign-in-and-sign-up/sign-in-and-sign-up.components';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
