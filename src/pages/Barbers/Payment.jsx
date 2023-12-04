import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ details, onClose }) => {
  const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const navigate = useNavigate()

  const handlePayment = () => {
    setShowOrderDetailModal(true);
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleNavigate = () => {
	navigate('../Home')
  }
  return (
    <div className="bg-white rounded-md p-6">
			<div className="bg-gray-900 text-white rounded-t-md">
				<h1 className="text-lg font-bold p-4">Credit Card</h1>
			</div>
			<div className="p-4">
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="card-number">
						Nomor Kartu
					</label>
					<input
						className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="card-number"
						type="text"
						placeholder="**** **** **** ****"
					/>
				</div>

					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="expiration-date">
							Masa berlaku
						</label>
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="expiration-date"
							type="text"
							placeholder="MM/YY"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-bold mb-2" for="cvv">
							CVV
						</label>
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="cvv"
							type="text"
							placeholder="***"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-bold mb-2" for="cvv">
							Nama
						</label>
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Full Name"
						/>
					 </div>

					 {!paymentSuccess ? (
          <center>
            <button
              className="bg-primaryColor hover:bg-hoverColor text-white font-bold py-2 px-4 rounded-lg"
              onClick={handlePayment}
            >
              Bayar Sekarang
            </button>
          </center>
        ) : (
          <p className="text-green-500 font-bold">Pembayaran Berhasil!</p>
        )}
      </div>

      {showOrderDetailModal && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white rounded-md p-6 w-3/4">
      {paymentSuccess ? (
        <>
          <h2 className="text-lg font-bold mb-4">Detail Pesanan</h2>
          <p>Tanggal: {details.selectedDate}</p>
          <p>Waktu: {details.selectedTime}</p>
          <p>Layanan yang dipilih:</p>
          <ul>
            {details.selectedServices.map((service) => (
              <li key={service._id}>
                {service.name} - Rp. {service.price}
              </li>
            ))}
          </ul>
          <p>Harga Barber: Rp. {details.barberDetails?.price || 0}</p>
          <p>Total Harga Layanan: Rp. {details.totalPrice}</p>
          <p>Total Amount: Rp. {details.totalPrice + (details.barberDetails?.price || 0)}</p>
          <p className="text-green-500 font-bold mt-4">Pembayaran Berhasil!</p>
          <button
            className="bg-primaryColor hover:bg-hoverColor text-white font-bold py-2 px-4 rounded-lg mt-4"
            onClick={handleNavigate}
          >
            Kembali ke Home
          </button>
        </>
      ) : (
        <p>Tunggu Sebentar</p>
      )}
    </div>
  </div>
)}
    </div>
  );
};

		export default Payment;
