import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import apiService from '../../utils/api-services';
import Loader from '../Loader';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
	const [auth, setAuth] = React.useState(false);
	const [checking, setChecking] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			const authCheck = await apiService('/auth/token');
			if (authCheck) {
				setAuth(true);
				setChecking(false);
			} else {
				setChecking(false);
			}
		})();
	}, []);

	if (checking) {
		return <Loader />;
	}

	if (auth) {
		return <Route {...rest}>{children}</Route>;
	} else {
		return (
			<Redirect
				to={{
					pathname: '/login',
					state: { msg: 'You must be logged in to see this page.' }
				}}
			/>
		);
	}
};

interface PrivateRouteProps {
	exact: boolean;
	path: string;
}

export default PrivateRoute; 