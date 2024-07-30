import sideImg from "../../assets/side.png";
import { FormGroup } from "../../components";
import { useForm } from "react-hook-form";
import accountMetaData from "../../data/accountData";
import "./account.css";

const Account = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitAccount = () => {
		console.log(getValues());
	};

	return (
		<main>
			<div className="flex gen-auth">
				<section className="md-padx-1x pady-app-top max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
					<h2 className="auth__title">Account</h2>
					<form
						className="flex flex-col padx-01x pady-01x auth-form"
						onSubmit={handleSubmit(submitAccount)}
					>
						{accountMetaData.map((data) => {
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

						<div className="flex align-ic justify-btw auth-action">
							<button className="btn btn--primary btn--block">
								Update
							</button>
						</div>
					</form>
				</section>
				<div className="auth-side">
					<img src={sideImg} alt="" />
				</div>
			</div>
		</main>
	);
};

export default Account;
