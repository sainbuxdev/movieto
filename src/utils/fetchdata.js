const fetchData = async (url) => {
	const response = await fetch(url);

	if (response.status !== 200) {
		return {
			success: false,
			error: { status: response.status, error: response.statusText },
		};
	}

	const data = await response.json();
	return { success: true, data };
};

const signup = async (url, dataObj) => {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(dataObj),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	const status = response.status;
	const { message } = await response.json();

	return { success: status === 201, message };
};

const login = async (url, dataObj) => {
	console.log(dataObj);

	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(dataObj),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	const result = await response.json();

	const message = result.message;
	const token = result.data?.token;

	return { success: token ? true : false, message, token };
};

export { fetchData, signup, login };
