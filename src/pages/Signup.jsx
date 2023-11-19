import registerImg from '../assets/register-img.png';
import avatar from '../assets/avatar-icon.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		photo: selectedFile,
	});

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
								name="name"
								placeholder="Masukkan nama.."
								value={formData.name}
								onChange={handleInputChange}
								className="w-full pr-4 py-3 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
								className="w-full pr-4 py-3 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
								className="w-full pr-4 py-3 border-b border-solid border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
								required
							/>
						</div>

						<div className="mb-5 flex items-center gap-3">
							<figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-purpleColor flex items-center justify-center">
								<img src={avatar} alt="" className="w-full rounded-full" />
							</figure>

							<div className="relative w-[130px] h-[50px]">
								<input
									type="file"
									name="photo"
									onChange={handleFileChange}
									id="customFile"
									accept=".jpg, .jpeg, .png"
									className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
								/>

								<label
									htmlFor="customFile"
									className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#bb00ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer text-center">
									Upload Photo
								</label>
							</div>
						</div>

						<div className="mt-7">
							<button
								type="submit"
								className="w-full bg-purpleColor text-white text-[18px] leading-[30px] rounded-lg py-3 px-3">
								Register
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
