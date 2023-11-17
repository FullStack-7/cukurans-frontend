import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import customerAvatar from '../../assets/avatar.png';
import { HiStar } from 'react-icons/hi';

const TestimonialList = () => {
	return (
		<div className="mt-[30px] lg:mt-[55px]">
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
				<SwiperSlide>
					<div className="py-[30px] px-5 rounded-3">
						<div className="flex items-center gap-[13px]">
							<img src={customerAvatar} className="rounded-lg" />
							<div>
								<h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
									Bagas Hananto
								</h4>
								<div className="flex items-center gap-[2px]">
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
								</div>
							</div>
						</div>

						<p className="text-[16px] leading-7 mt-4 text-textColor font-[400] mb-5">
							Tempat cukur murah, ramah lalu tidak perlu mengantri cukup dengan
							janjian dengan kapster.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="py-[30px] px-5 rounded-3">
						<div className="flex items-center gap-[13px]">
							<img src={customerAvatar} className="rounded-lg" />
							<div>
								<h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
									Faisal Fernando
								</h4>
								<div className="flex items-center gap-[2px]">
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
								</div>
							</div>
						</div>

						<p className="text-[16px] leading-7 mt-4 text-textColor font-[400] mb-5">
							Selain tempat cukur, ini juga bisa operasi plastik.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="py-[30px] px-5 rounded-3">
						<div className="flex items-center gap-[13px]">
							<img src={customerAvatar} className="rounded-lg" />
							<div>
								<h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
									Adam Prasetya
								</h4>
								<div className="flex items-center gap-[2px]">
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
								</div>
							</div>
						</div>

						<p className="text-[16px] leading-7 mt-4 text-textColor font-[400] mb-5">
							Saya merasa tidak perlu membawa uang cash, karena disini sistem
							pembayarannya cashless
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="py-[30px] px-5 rounded-3">
						<div className="flex items-center gap-[13px]">
							<img src={customerAvatar} className="rounded-lg" />
							<div>
								<h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
									Sakti Harahap
								</h4>
								<div className="flex items-center gap-[2px]">
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
									<HiStar className="text-yellowColor w-[18px] h-5" />
								</div>
							</div>
						</div>

						<p className="text-[16px] leading-7 mt-4 text-textColor font-[400] mb-5">
							Sesuai dengan ekspektasi, saya tidak ragu untuk datang kesini
							lagi.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default TestimonialList;
