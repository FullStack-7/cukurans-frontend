import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../config.js';
import { authContext } from '../../context/AuthContext.jsx';
import formatDate from '../../utils/formatDate.js';

const UserBooking = () => {
	const [details, setDetails] = useState([]);
	const { userId, token } = useContext(authContext);

	useEffect(() => {
		getDetailsOrder();
	}, []);

	const getDetailsOrder = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/orders/user/${userId}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const { data } = response;

			setDetails(data);
			console.log(data);
		} catch (error) {
			console.error('Response:', error.response);
		}
	};

	return (
		<div className="ml-2">
			<div className="relative overflow-x-auto">
				{details.data?.map((item) => (
					<>
						<table class="w-full text-sm text-left rtl:text-right">
							<thead className="text-sm uppercase text-center border-b">
								<tr>
									<th>Jam Booking</th>
									<th>Tanggal Booking</th>
									<th>Total Harga</th>
									<th>Pembayaran</th>
								</tr>
							</thead>
							<tbody className="text-center">
								<tr>
									<td className="px-6 py-3">{item.selectedTime}</td>
									<td className="px-6 py-3">{formatDate(item.selectedDate)}</td>
									<td className="px-6 py-3">Rp. {item.totalAmount}</td>
									<td className="px-6 py-3">
										{item.paymentMethod.toUpperCase()}
									</td>
								</tr>
							</tbody>
						</table>
					</>
				))}
			</div>
		</div>
	);
};

export default UserBooking;
