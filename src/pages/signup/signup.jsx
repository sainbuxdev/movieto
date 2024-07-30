import { Link } from "react-router-dom";
import sideImg from "../../assets/side.png";
import { Alert, FormGroup } from "../../components";
import signupMetaData from "../../data/signupData";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../context";
import { signup } from "../../utils/fetchdata";
import "./signup.css";
import { useState } from "react";
const Signup = () => {
	const [alert, setAlert] = useState({ show: false, type: "", text: "" });

	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { baseUrl, onSignup, loginUser, setToken } = useGlobalContext();

	const submitSignup = async (values) => {
		delete values["confirmPassword"];
		const result = await signup(`${baseUrl}user/signup`, values);
		setAlertState(result);

		if (result.success) {
			onSignup(values);

			const user_name = values.user_name;
			const password = values.password;

			loginUser({
				user_name,
				password,
			});
		}
	};

	const setAlertState = (response) => {
		console.log(response);
		if (response.success) {
			setAlert({
				show: true,
				type: "success",
				text: response.message,
			});
		} else {
			setAlert({
				show: true,
				type: "danger",
				text: response.message,
			});
		}
	};

	return (
		<main>
			<div className="flex gen-auth">
				<section className="md-padx-1x pady-app-top max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
					<h2 className="auth__title">Signup</h2>
					<form
						noValidate
						className="flex flex-col padx-01x pady-01x auth-form"
						onSubmit={handleSubmit(submitSignup)}
					>
						{signupMetaData.map((data) => {
							return (
								<FormGroup
									key={data.id}
									{...data}
									getValues={getValues}
									register={register}
									error={errors[data.name]}
								/>
							);
						})}

						<div className="flex align-ic justify-btw  auth-action">
							<div className="auth-action__invert">
								Don't have an account!{" "}
								<Link
									to="/login"
									className="btn btn--primary-no-outline"
								>
									Login
								</Link>
							</div>

							<button type="submit" className="btn btn--primary">
								Signup
							</button>
						</div>
					</form>

					{alert.show && (
						<Alert
							generalClasses={`mgy-15x alert--${alert.type}`}
							text={alert.text}
						/>
					)}
				</section>
				<div className="auth-side">
					<img src={sideImg} alt="" />
				</div>
			</div>
		</main>
	);
};

export default Signup;
