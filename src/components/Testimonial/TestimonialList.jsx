import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import customerAvatar from '../../assets/avatar.png';
import { HiStar } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';

const TestimonialList = () => {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		fetchTestimonials();
	}, []);

	const fetchTestimonials = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/rating`, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			// console.log(response)
			const { data } = response;
			setTestimonials(response.data.ratings);
		} catch (error) {
			console.error('Error fetching testimonials:', error);
		}
	};

	return (
		<div className="mt-[30px] lg:mt-[55px]">
			{testimonials.length > 0 ? (
				<Swiper
					modules={[Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="py-[30px] px-5 rounded-3">
								<div className="flex items-center gap-[13px]">
									<img
										src={customerAvatar}
										className="rounded-lg"
										alt={`Customer ${index + 1}`}
									/>
									<div>
										<h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
											{testimonial.userId?.username}
										</h4>
										<div className="flex items-center gap-[2px]">
											{Array.from({ length: testimonial.rating }).map(
												(_, i) => (
													<HiStar
														key={i}
														className="text-yellowColor w-[18px] h-5"
													/>
												),
											)}
										</div>
									</div>
								</div>
								<p className="text-[16px] leading-7 mt-4 text-textColor font-[400] mb-5">
									{testimonial.pesan}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<p>Tidak ada testimonial yang ditemukan.</p>
			)}
		</div>
	);
};

export default TestimonialList;
