import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import BookingCard from '../../components/Barbers/BookingCard';

const SideForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedServices, setSelectedServices] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [details, setDetails] = useState({});

	const { userId } = useContext(authContext)

	const { id } = useParams();

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		try {
			const response = axios.get(`${BASE_URL}/barbers/${id}`);

			const { data } = await response;
			setDetails(data);
			if (data && data.price) {
                setDetails(data);
                setTotalPrice(data.price);
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
            setSelectedServices(selectedServices.filter((s) => s._id !== service._id));
            setTotalPrice((prevTotalPrice) => prevTotalPrice - service.price);
        }
    };
	
	
	const handleBooking = async () => {
		try {
			const bookingData = {
				userId:userId,
				barberId: id, // Replace with the actual barber ID
				selectedServices: selectedServices.map((service) => ({
					serviceId: service._id,
					price: service.price // If price is required in the backend
				})),
				totalAmount: totalPrice,
				selectedDate: new Date(selectedDate), // Convert selectedDate to Date object
				selectedTime: selectedTime,
			};

			console.log(bookingData)
	
			await axios.post(`${BASE_URL}/orders`, bookingData);
			console.log("Order successfully placed!");
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
									{details.data.schedule[0].day}
								</p>
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
						{details.data.services.map(service => (
						<li
							className="flex items-center justify-between mb-2"
							key={service._id}
						>
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
					<label htmlFor="datePicker" className="block text-sm font-semibold text-gray-600">
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
					<label htmlFor="timePicker" className="block text-sm font-semibold text-gray-600">
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
					{details.data && details.data.services.map((service) => (
						<li key={service._id} className="flex items-center justify-between mb-2">
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
					<p className="text-lg font-semibold">Total Harga: Rp. {totalPrice}</p>
				</div>
				<button
					className="btn px-2 w-full rounded-md bg-green-500 text-white"
					onClick={handleBooking}
				>
					Konfirmasi Pemesanan
				</button>
				</div>
				<button className='mt-4 text-red-500'
				onClick={() => setIsOpen(false)}>Cancle</button>
			</div>
			)}

			<button
				className="btn px-2 w-full rounded-md"
				onClick={() => setIsOpen(true)}>
				Booking Sekarang
			</button>
		</div>
	);
};

export default SideForm;
