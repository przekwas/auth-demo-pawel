import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import apiService, { setStorage } from '../utils/api-services';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Login: React.FC<LoginProps> = (props) => {
	const history = useHistory();
	const { state } = useLocation<{ msg: string }>();
	const [values, setValues] = React.useState<{ [key: string]: string }>({
		email: 'test@test.com',
		password: 'password123'
	});
	const [error, setError] = React.useState<string>('');

	React.useEffect(() => {
		setError(state?.msg);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleLogin = async () => {
		const info = await apiService('/auth/login', 'POST', values);
		setStorage(info.token, info.role);
		history.push('/protected');
	};

	return (
		<Row className="mt-5 justify-content-center">
			<Col md={8}>
				<Form className="border rounded-lg p-3">
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							value={values.email || ''}
							onChange={handleChange}
							type="email"
							name="email"
							size="lg"
							className="my-2"
							placeholder="fox@mccloud.com"
							autoComplete="email"
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							value={values.password || ''}
							onChange={handleChange}
							type="password"
							name="password"
							size="lg"
							className="my-2"
							placeholder="20xxmultishine"
							autoComplete="current-password"
						/>
					</Form.Group>
					<Button onClick={handleLogin} className="w-50 mx-auto" block size="lg">
						Login
					</Button>
				</Form>
				{error && <Alert variant="danger">{error}</Alert>}
			</Col>
		</Row>
	);
};

interface LoginProps {}

export default Login;
