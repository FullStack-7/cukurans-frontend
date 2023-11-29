import loginImg from '../assets/login-img.png';
import { useState, useContext } from 'react';
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader';
import { BASE_URL } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const { dispatch } = useContext(authContext);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = response.data;

			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: {
					userId: result.userId,
					token: result.token,
				},
			});

			console.log(result);

			setLoading(false);
			toast.success(result.message);
			navigate('/');
		} catch (error) {
			toast.error(error.message);
			setLoading(false);
		}
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

					<form className="py-4 md:py-0" onSubmit={handleSubmit}>
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
								disabled={loading && true}
								type="submit"
								className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3 px-3">
								{loading ? <HashLoader size={30} color="#ffff" /> : 'Login'}
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
