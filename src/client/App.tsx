import * as React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Header from './components/Header';
import Navbah from './components/Navbah';
import Home from './views/Home';
import Protected from './views/Protected';
import Register from './views/Register';
import Login from './views/Login';

const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<Container>
				<Header />
				<Navbah />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute exact path="/protected">
						<Protected />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Container>
		</BrowserRouter>
	)
};

interface AppProps {}

export default App;
