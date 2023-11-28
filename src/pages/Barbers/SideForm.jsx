import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../config';
import BookingCard from '../../components/Barbers/BookingCard';

const SideForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [details, setDetails] = useState({});

	const { id } = useParams();

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		try {
			const response = axios.get(`${BASE_URL}/barbers/${id}`);

			const { data } = await response;
			setDetails(data);
		} catch (error) {
			console.info(error);
		}
	};

	return (
		<div className="shadow-shadowPanel p-3 lg:p-5 rounded-md">
			{details.data && (
				<>
					<div
						className="flex items-center justify-between"
						key={details.data._id}>
						<p className="text_para mt-0 font-semibold">Harga</p>
						<span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
							Rp. {details.data.price}
						</span>
					</div>

					<div className="mt-[30px]">
						<p className="text_para mt-0 font-semibold text-headingColor">
							Tersedia pada waktu:
						</p>

						<ul className="mt-3">
							<li
								className="flex items-center justify-between mb-2"
								key={details.data.schedule._id}>
								<p className="text-[15px] leading-6 text-textColor font-semibold">
									{details.data.schedule[0].day}
								</p>
								<p className="text-[15px] leading-6 text-textColor font-semibold">
									{details.data.schedule[0].waktu}
								</p>
							</li>
						</ul>
					</div>
				</>
			)}

			{
				// Modal
				isOpen && (
					<BookingCard closeModal={() => setIsOpen(close)}></BookingCard>
				)
			}

			<button
				className="btn px-2 w-full rounded-md"
				onClick={() => setIsOpen(true)}>
				Booking Sekarang
			</button>
		</div>
	);
};

export default SideForm;
