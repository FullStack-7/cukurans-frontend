import { Link } from 'react-router-dom';
// import starIcon from '../../assets/Star.png';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../config';

const BarberCard = () => {
	const [barber, setBarber] = useState([]);

	useEffect(() => {
		getBarbers();
	}, []);

	const getBarbers = async () => {
		const response = axios.get(`${BASE_URL}/barbers`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const { data } = await response;

		setBarber(data);
	};

	return (
		<>
			{barber.data?.map((item) => (
				<div className="p-3 lg:p-5" key={item._id}>
					<div>
						<img src={item.image} alt="" className="rounded-lg w-full" />
					</div>

					<div className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 flex items-center justify-between">
						{item.name}
						<Link
							to={`/barbers/${item._id}`}
							className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
							<BsArrowRight className="group-hover:text-white w-6 h-5" />
						</Link>
					</div>

					<div className="mt-2 lg:mt-4 flex items-center justify-between">
						<span className="bg-[#e0f9fb] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
							{item.description}
						</span>

						{/* <div className="flex items-center gap-[6px]">
							<span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
								<img src="" alt="" />
							</span>

							<span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor"></span>
						</div> */}
					</div>
				</div>
			))}
		</>
	);
};

export default BarberCard;
