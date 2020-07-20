export let Token: string = localStorage.getItem('token') || null;
export let Role: string = localStorage.getItem('role') || null;

export const setStorage = (token: string, role: string) => {
	Token = token;
	Role = role;
	localStorage.setItem('token', token);
	localStorage.setItem('role', role);
};

export const logout = () => {
	Token = null;
	Role = null;
	localStorage.clear();
};

export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
	const headers = {
		'Content-Type': 'application/json'
	};

	if (Token) {
		headers['Authorization'] = `Bearer ${Token}`;
	}

	try {
		const res = await fetch(uri, {
			method,
			headers,
			body: JSON.stringify(body)
		});

		if (res.ok) {
			return uri === '/auth/token' ? true : <T>await res.json();
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};
