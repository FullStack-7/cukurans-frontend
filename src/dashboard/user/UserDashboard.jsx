import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

import UserBooking from './UserBooking';

const UserDashboard = () => {
	const { dispatch, username } = useContext(authContext);
	const [tab, setTab] = useState('bookings');

	const navigate = useNavigate();
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGOUT' });

		toast.success('Logout successfully');
		navigate('/login');
	};

	return (
		<div className="max-w-[1170px] px-5 mx-auto mt-8">
			<div className="grid md:grid-cols-3 gap-10">
				{username && (
					<div className="pb-[50px] px-[30px] rounded-md">
						<div className="text-center mt-4">
							<h3 className="text-[18px] leading-[30px] text-headingColor font-bolc">
								Nama: {username}
							</h3>
						</div>

						<div className="mt-5">
							<button
								onClick={handleLogout}
								className="w-full p-3 text-[16px] bg-[#ff3c3c] leading-7 rounded-md text-white">
								Logout
							</button>
						</div>
					</div>
				)}

				<div className="md:col-span-2 md:px-[30px] border-2 border-solid rounded-lg">
					<div className="p-2 text-center">
						<button
							onClick={() => setTab('bookings')}
							className={`${
								tab === 'bookings' && 'font-normal'
							} p-2 px-5 mr-5 rounded-md font-semibold text-[18px] leading-7`}>
							My Booking
						</button>
					</div>

					{tab === 'bookings' && <UserBooking />}
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
