const signupMeta = [
	{
		id: 1,
		label: "Name",
		type: "text",
		autoFocus: true,
		required: { value: true, message: `Name is required` },
		name: "name",
	},
	{
		id: 2,
		label: "Username",
		type: "text",
		required: { value: true, message: `Username is required` },
		name: "username",
	},
	{
		id: 3,
		label: "Email",
		type: "email",
		required: { value: true, message: `Email is required` },
		name: "email",
		pattern: {
			value: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
			message: `Not a valid email`,
		},
	},
	{
		id: 4,
		label: "Password",
		type: "password",
		required: { value: true, message: `Password is required` },
		name: "password",
		minLength: {
			value: 8,
			message: `Password must be 8 character long`,
		},
		pattern: {
			value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
			message: `Password must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character`,
		},
	},
	{
		id: 5,
		label: "Confirm Password",
		type: "password",
		required: { value: true, message: `Confirm Password is required` },
		name: "confirmPassword",
		match: {
			value: "password",
			message: "Password did not match",
		},
	},
];

export default signupMeta;
