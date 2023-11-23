import React from 'react';
import { useState } from "react"
import BookingCard from "../../components/Barbers/BookingCard"

const SideForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="shadow-shadowPanel p-3 lg:p-5 rounded-md">
			<div className="flex items-center justify-between">
				<p className="text_para mt-0 font-semibold">Harga</p>
				<span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
					Rp. 100.000
				</span>
			</div>

			<div className="mt-[30px]">
				<p className="text_para mt-0 font-semibold text-headingColor">
					Tersedia pada waktu:
				</p>

				<ul className="mt-3">
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							Senin
						</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							10:00 Pagi - 8:30 Malam
						</p>
					</li>
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							Kamis
						</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							10:00 PM - 8:30 Malam
						</p>
					</li>
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							Sabtu
						</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							11:00 PM - 8:30 Malam
						</p>
					</li>
				</ul>
			</div>

			{
                // Modal
                isOpen && (
                    <BookingCard closeModal={() => setIsOpen(close)}></BookingCard>
                )
            }

			<button 
				className="btn px-2 w-full rounded-md" onClick={() => setIsOpen(true)}>
					Booking Sekarang
				</button>
		</div>
	);
};

export default SideForm;
