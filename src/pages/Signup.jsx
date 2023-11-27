import axios from 'axios';
import { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/register-img.png';
import { BASE_URL } from '../../config.js';

const SignUp = () => {
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const response = await axios.post(`${BASE_URL}/auth/regis`, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const { message } = response.data;

			setLoading(false);
			toast.success(message);
			navigate('/login');

			console.log(message);
		} catch (error) {
			toast.error(error.message);
			setLoading(false);
		}
	};

	return (
		<div className="max-w-[900px] mx-auto p-3">
			<div className="flex justify-between gap-5 items-stretch">
				<div className="w-1/2 hidden md:block py-8">
					<img src={registerImg} alt="" className="items-center" />
				</div>

				<div className="w-full md:w-1/2 p-8">
					<h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
						<span className="text-purpleColor">Silahkan buat </span>akun 👇
					</h3>

					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<input
								type="text"
								name="username"
								placeholder="Masukkan nama.."
								value={formData.username}
								onChange={handleInputChange}
								className="w-full pr-4 py-3 px-2 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
								required
							/>
						</div>
						<div className="mb-5">
							<input
								type="email"
								name="email"
								placeholder="Masukkan email.."
								value={formData.email}
								onChange={handleInputChange}
								className="w-full pr-4 py-3 px-2 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
								className="w-full pr-4 py-3 px-2 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
								required
							/>
						</div>

						<div className="mt-7">
							<button
								disabled={loading && true}
								type="submit"
								className="w-full bg-purpleColor text-white text-[18px] leading-[30px] rounded-lg py-3 px-3">
								{loading ? <HashLoader size={24} color="#fff" /> : 'Signup'}
							</button>
						</div>

						<p className="mt-5 text-textColor text-center">
							Sudah mempunyai akun?{' '}
							<Link to="/login" className="text-purpleColor font-medium ml-1">
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
