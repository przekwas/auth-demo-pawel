import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register: React.FC<RegisterProps> = (props) => {
	const [values, setValues] = React.useState<{ [key: string]: string }>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleRegister = async () => {
		const res = await fetch('/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		});
		if (res.ok) {
			const info = await res.json();
			console.log(info);
			localStorage.setItem('token', info.token);
			localStorage.setItem('role', info.role);
		}
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
					<Button onClick={handleRegister} className="w-50 mx-auto" block size="lg">
						Register
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

interface RegisterProps {}

export default Register;
