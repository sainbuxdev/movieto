import "./form-group.css";

const FormGroup = ({
	label,
	register,
	getValues,
	type,
	error,
	name,
	validationRules,
}) => {
	// if it is confirm password then we are bind the getValues function to validate function
	name === "confirmPassword" &&
		(validationRules.validate = validationRules.validate.bind(
			null,
			getValues
		));

	return (
		<div className="flex flex-col form-group">
			<label htmlFor={name} className="form__input-label">
				{label}
			</label>

			<input
				id={name}
				type={type}
				{...register(name, validationRules)}
				className={`form__input-field`}
			/>

			{error && <p className="form__input-error">{error.message}</p>}
		</div>
	);
};

export default FormGroup;
