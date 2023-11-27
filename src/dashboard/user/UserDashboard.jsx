import { useState } from 'react';
import userImg from '../../assets/avatar.png';

import UserBooking from './UserBooking';

const UserDashboard = () => {
	const [tab, setTab] = useState('bookings');

	return (
		<div className="max-w-[1170px] px-5 mx-auto mt-8">
			<div className="grid md:grid-cols-3 gap-10">
				<div className="pb-[50px] px-[30px] rounded-md">
					<div className="flex items-center justify-center">
						<figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
							<img
								src={userImg}
								alt=""
								className="w-full h-full rounded-full"
							/>
						</figure>
					</div>

					<div className="text-center mt-4">
						<h3 className="text-[18px] leading-[30px] text-headingColor font-bolc">
							Bgsxsxs
						</h3>

						<p className="text-textColor text-[15px] leading-6 font-medium">
							example@gmail.com
						</p>
					</div>

					<div className="mt-[50px] md:mt-[100px]">
						<button className="w-full p-3 text-[16px] bg-[#ff3c3c] leading-7 rounded-md text-white">
							Logout
						</button>
					</div>
				</div>

				<div className="md:col-span-2 md:px-[30px] border-2 border-solid rounded-lg">
					<div className="p-2">
						<button
							onClick={() => setTab('bookings')}
							className={`${
								tab === 'bookings' && 'font-normal hover:text-primaryColor'
							} p-2 px-5 mr-5 rounded-md text-headingColor font-semibold text-[16px] leading-7`}>
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
