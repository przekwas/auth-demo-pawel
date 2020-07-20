import * as React from 'react';
import { Token, logout, Role } from '../../utils/api-services';
import { NavLink, useLocation } from 'react-router-dom';

const AuthButton: React.FC<AuthButtonProps> = ({ setShow }) => {

	useLocation();

	if (Token && Role) {
		return (
			<NavLink
				onClick={() => {
					setShow(false);
					logout();
				}}
				className="btn btn-lg btn-link text-decoration-none"
				to="/">
				Logout
			</NavLink>
		);
	} else {
		return (
			<NavLink
				onClick={() => setShow(false)}
				className="btn btn-lg btn-link text-decoration-none"
				activeClassName="text-danger"
				exact
				to="/login">
				Login
			</NavLink>
		);
	}
};

interface AuthButtonProps {
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default AuthButton;
