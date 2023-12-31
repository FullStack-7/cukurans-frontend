import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import Payment from './Payment';

const SideForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showPaymentModal, setShowPaymentModal] = useState(false);
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedServices, setSelectedServices] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [details, setDetails] = useState({});

	const { userId } = useContext(authContext);

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		try {
			const response = axios.get(`${BASE_URL}/barbers/${id}`);

			const { data } = await response;
			setDetails(data);
			if (data && data.price) {
				setTotalPrice((prevTotalPrice) => prevTotalPrice + data.price);
			}
		} catch (error) {
			console.info(error);
		}
	};

	const handleServiceSelect = (service) => {
		const found = selectedServices.find((s) => s._id === service._id);
		if (!found) {
			setSelectedServices([...selectedServices, service]);
			setTotalPrice((prevTotalPrice) => prevTotalPrice + service.price);
		} else {
			setSelectedServices(
				selectedServices.filter((s) => s._id !== service._id),
			);
			setTotalPrice((prevTotalPrice) => prevTotalPrice - service.price);
		}
	};

	const handleBooking = async () => {
		try {
			const barberPrice = details.data?.price || 0;
			const bookingData = {
				userId: userId,
				barberId: id,
				selectedServices: selectedServices.map((service) => ({
					serviceId: service._id,
					price: service.price,
				})),
				totalAmount: totalPrice + barberPrice,
				selectedDate: new Date(selectedDate),
				selectedTime: selectedTime,
			};

			await axios.post(`${BASE_URL}/orders`, bookingData);
			toast.success('Booking successful');
			setShowPaymentModal(true);
		} catch (error) {
			console.error(error);
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
									{details.data.schedule[0].waktu}
								</p>
							</li>
						</ul>
					</div>
					<div className="mt-[30px]">
						<p className="text_para mt-0 font-semibold text-headingColor">
							Layanan yang Tersedia:
						</p>

						<ul className="mt-3">
							{details.data.services.map((service) => (
								<li
									className="flex items-center justify-between mb-2"
									key={service._id}>
									<p className="text-[15px] leading-6 text-textColor font-semibold">
										{service.name}
									</p>
									<p className="text-[15px] leading-6 text-textColor font-semibold">
										Rp. {service.price}
									</p>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
			

			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<div className="mb-4">
							<label
								htmlFor="datePicker"
								className="block text-sm font-semibold text-gray-600">
								Pilih Tanggal:
							</label>
							<input
								type="date"
								id="datePicker"
								value={selectedDate}
								onChange={(e) => setSelectedDate(e.target.value)}
								className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="timePicker"
								className="block text-sm font-semibold text-gray-600">
								Pilih Jam:
							</label>
							<input
								type="time"
								id="timePicker"
								value={selectedTime}
								onChange={(e) => setSelectedTime(e.target.value)}
								className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold text-gray-600 mb-2">
								Pilih Layanan:
							</label>
							<ul>
								{details.data &&
									details.data.services.map((service) => (
										<li
											key={service._id}
											className="flex items-center justify-between mb-2">
											<label htmlFor={`service-${service._id}`}>
												<input
													type="checkbox"
													id={`service-${service._id}`}
													value={service._id}
													onChange={() => handleServiceSelect(service)}
													className="mr-2"
												/>
												{service.name} - Rp. {service.price}
											</label>
										</li>
									))}
							</ul>
						</div>
						<div className="mb-4">
							<p className="text-lg font-semibold">
								Total Harga: Rp. {totalPrice + (details.data?.price || 0)}
							</p>
						</div>
					</div>
					<button
						className="btn px-2 w-full rounded-md bg-green-500 text-white"
						onClick={handleBooking}>
						Konfirmasi Pemesanan
					</button>
					<button
						className="mt-2 btn w-full rounded-md bg-red-500 text-white"
						onClick={() => setIsOpen(false)}>
						Cancel
					</button>
				</div>
			)}

			{showPaymentModal && (
				<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="bg-white rounded-md w-3/4 md:w-96">
						<Payment
							details={{
								selectedDate,
								selectedTime,
								selectedServices,
								totalPrice,
								barberDetails: details.data
							}}
							onClose={() => setShowPaymentModal(false)}
						/>

					</div>
				</div>
			)}

			{!isOpen && (
				<button
					className="btn px-2 w-full rounded-md"
					onClick={() => setIsOpen(true)}>
					Booking Sekarang
				</button>
			)}
		</div>
	);
};

export default SideForm;
