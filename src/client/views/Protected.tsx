import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apiService from '../utils/api-services';

const Protected: React.FC<ProtectedProps> = (props) => {
	const [protectedData, setProtectedData] = React.useState<{ msg: string }>({ msg: '' });

	React.useEffect(() => {
		(async () => {
			const data = await apiService('/api/blogs');
			setProtectedData(data);
		})();
	}, []);

	return (
		<Row className="my-2">
			<Col md={12}>
				<h1 className="text-center text-primary">Protected Page Data:</h1>
				<p className="text-center my-3">{protectedData.msg}</p>
			</Col>
		</Row>
	);
};

interface ProtectedProps {}

export default Protected;
