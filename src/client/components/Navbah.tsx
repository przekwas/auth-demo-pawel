import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthButton from './auth/AuthButton';

const Navbah: React.FC<NavbahProps> = (props) => {
	const [show, setShow] = React.useState(false);
	const [query, setQuery] = React.useState('');

	return (
		<Row className="my-2">
			<Col md={12}>
				<div className="d-flex align-items-center justify-content-between border-bottom border-primary">
					<NavLink
						onClick={() => setShow(false)}
						className="btn btn-lg btn-link text-decoration-none"
						activeClassName="text-danger"
						exact
						to="/">
						Home
					</NavLink>
					<NavLink
						onClick={() => setShow(false)}
						className="btn btn-lg btn-link text-decoration-none"
						activeClassName="text-danger"
						exact
						to="/protected">
						Protected
					</NavLink>
					<AuthButton setShow={setShow} />
					<NavLink to="#" onClick={() => setShow(!show)}>
						Search
					</NavLink>
				</div>
				<div className={`search-bar ${show ? 'search-bar-active' : ''}`}>
					<input
						type="text"
						placeholder="Search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="pl-2 w-100 h-100 border border-top-0 rounded-bottom shadow-sm"
					/>
					<FaSearch onClick={() => console.log('>:(')} className="search-icon" />
				</div>
			</Col>
		</Row>
	);
};

interface NavbahProps {}

export default Navbah;
