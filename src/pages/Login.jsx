import loginImg from '../assets/login-img.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="max-w-[900px] mx-auto p-3">
			<div className="flex justify-between gap-5">
				<div className="w-1/2 hidden md:block ">
					<img src={loginImg} alt="" className="items-center" />
				</div>

				<div className="w-full md:w-1/2 p-8">
					<h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
						<span className="text-primaryColor">Selamat datang</span> Kembali👋
					</h3>

					<form className="py-4 md:py-0">
						<div className="mb-5">
							<input
								type="email"
								name="email"
								placeholder="Masukkan email.."
								value={formData.email}
								onChange={handleInputChange}
								className="w-full py-3 px-3 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
								required
							/>
						</div>
						<div className="mb-5">
							<input
								type="password"
								name="password"
								placeholder="Masukkan password.."
								value={formData.password}
								onChange={handleInputChange}
								className="w-full py-3 px-3 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
								required
							/>
						</div>

						<div className="mt-7">
							<button
								type="submit"
								className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3 px-3">
								Login
							</button>
						</div>

						<p className="mt-5 text-textColor text-center">
							Belum mempunyai akun?{' '}
							<Link
								to="/register"
								className="text-primaryColor font-medium ml-1">
								Register
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
