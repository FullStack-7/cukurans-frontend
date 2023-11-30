import { useState } from 'react';

const Payment = () => {
	const [tab, setTab] = useState('');

	return (
		<div className="flex items-center justify-between">
			<div class="w-1/3 mx-auto mt-5 bg-white rounded-md shadow-md overflow-hidden">
				<div class="px-6 py-4 bg-gray-900 text-white">
					<h1 class="text-lg font-bold">Credit Card</h1>
				</div>
				<div class="px-6 py-4">
					<div class="mb-4">
						<label class="block text-gray-700 font-bold mb-2" for="card-number">
							Nomor Kartu
						</label>
						<input
							class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="card-number"
							type="text"
							placeholder="**** **** **** ****"
						/>
					</div>

					<div class="mb-4">
						<label
							class="block text-gray-700 font-bold mb-2"
							for="expiration-date">
							Masa berlaku
						</label>
						<input
							class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="expiration-date"
							type="text"
							placeholder="MM/YY"
						/>
					</div>

					<div class="mb-4">
						<label class="block text-gray-700 font-bold mb-2" for="cvv">
							CVV
						</label>
						<input
							class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="cvv"
							type="text"
							placeholder="***"
						/>
					</div>

					<div class="mb-4">
						<label class="block text-gray-700 font-bold mb-2" for="cvv">
							Nama
						</label>
						<input
							class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Full Name"
						/>
					</div>

					<center>
						<button class="bg-primaryColor hover:bg-hoverColor text-white font-bold py-2 px-4 rounded-lg">
							Bayar Sekarang
						</button>
					</center>
				</div>
			</div>
		</div>
	);
};

export default Payment;
