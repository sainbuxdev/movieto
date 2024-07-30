const loginMetaData = [
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
		id: "password",
		label: "Password",
		type: "password",
		name: "password",
		validationRules: {
			required: {
				value: true,
				message: "Password is required",
			},
		},
	},
];

export default loginMetaData;
