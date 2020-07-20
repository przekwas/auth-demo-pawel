import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<Jumbotron fluid className="rounded-lg bg-transparent">
			<Container>
				<h1 className="display-4">Luke's Awesome Website!</h1>
				<p>
					I am really cool and this is my really cool website.  Also there's some authentication stuff, whatever.
				</p>
			</Container>
		</Jumbotron>
	);
};

interface HeaderProps {}

export default Header;
