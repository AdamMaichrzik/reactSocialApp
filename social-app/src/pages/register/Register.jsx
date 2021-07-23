import "./register.css";

export default function Register() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">simpleSocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on simpleSocial
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Email" className="loginInput" />
						<input placeholder="Password" className="loginInput" />
						<button className="loginButton">Sign up</button>
						<button className="loginRegisterButton">Login in to account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
