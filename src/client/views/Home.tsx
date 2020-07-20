import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home: React.FC<HomeProps> = (props) => {
	return (
		<Row className="my-2">
			<Col md={12}>
				<h1 className="text-center text-primary">Home Page</h1>
			</Col>
		</Row>
	);
};

interface HomeProps {}

export default Home;
