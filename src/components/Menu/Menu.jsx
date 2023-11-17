import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

const Menu = () => {
	return (
		<>
			{/* Our Menu */}
			<section>
				<div className="container">
					<div className="lg:w-[470px] mx-auto">
						<h2 className="heading text-center">Fitur Kami</h2>
						<p className="text__para text-center">
							Fitur yang terdapat di dalam barbershop kami
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
						<div className="py-[30px] px-5">
							<div className="flex items-center justify-center">
								<img src={icon1} alt="" />
							</div>

							<div className="mt-[30px]">
								<h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
									Barber Professional
								</h2>
								<p className="text-[16px] text-center leading-7 font-[400] text-textColor">
									Kapster dengan pengalaman rata-rata lebih dari 2 tahun
								</p>
							</div>
						</div>

						<div className="py-[30px] px-5">
							<div className="flex items-center justify-center">
								<img src={icon2} alt="" />
							</div>

							<div className="mt-[30px]">
								<h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
									Pembayaran Mudah
								</h2>
								<p className="text-[16px] text-center leading-7 font-[400] text-textColor">
									Pembayaran mudah dan aman dengan sistem cashless
								</p>
							</div>
						</div>

						<div className="py-[30px] px-5">
							<div className="flex items-center justify-center">
								<img src={icon3} alt="" />
							</div>

							<div className="mt-[30px]">
								<h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
									Booking
								</h2>
								<p className="text-[16px] text-center leading-7 font-[400] text-textColor">
									Booking dengan mudah tanpa harus datang mengantri
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Our Menu End */}
		</>
	);
};

export default Menu;
