const signupMeta = [
	{
		id: "full_name",
		label: "Name",
		name: "full_name",
		type: "text",
		validationRules: {
			required: { value: true, message: `Username is required` },
		},
	},
	{
		id: "user_name",
		label: "Username",
		name: "user_name",
		type: "text",
		validationRules: {
			required: { value: true, message: `Username is required` },
		},
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		name: "email",
		validationRules: {
			required: { value: true, message: `Email is required` },
			pattern: {
				value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
				message: `Not a valid email`,
			},
		},
	},
	{
		id: "password",
		label: "Password",
		type: "password",
		name: "password",
		validationRules: {
			required: { value: true, message: `Password is required` },
			minLength: {
				value: 8,
				message: `Password must be 8 character long`,
			},
			pattern: {
				value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				message: `Password must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character`,
			},
		},
	},
	{
		id: "confirmPassword",
		label: "Confirm Password",
		type: "password",
		name: "confirmPassword",
		validationRules: {
			required: {
				value: true,
				message: "Confirm Password is required",
			},
			validate: (values) => {
				const { password, confirmPassword } = values();
				return (
					password === confirmPassword || "Password does not match"
				);
			},
		},
	},
];

export default signupMeta;
