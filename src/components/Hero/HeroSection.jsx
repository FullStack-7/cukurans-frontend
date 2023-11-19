import { Link } from 'react-router-dom';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';

const HeroSection = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="pt-[60px] 2xl:h-[800px]">
				<div className="container">
					<div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
						{/* Hero Content */}
						<div>
							<div className="lg:w-[570px]">
								<h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] mb-3">
									Selamat Datang di Cukurans.
								</h1>
								<p className="text_para">
									Kami di Cukurans Barbershop mengundang Anda untuk merasakan
									pengalaman potong rambut yang luar biasa dan kami berkomitmen
									memberikan layanan terbaik untuk penampilan Anda.
								</p>
								<Link to="/barbers">
									<button className="btn hover:bg-hoverColor rounded-lg">
										Booking Sekarang
									</button>
								</Link>
							</div>
							{/* Hero */}
							<div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
								<div>
									<h2 className="text-[25px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
										5
									</h2>
									<span className="w-[100px] block h-2 bg-yellowColor rounded-full mt-[-14px]"></span>
									<p className="text_para">Tahun pengalaman</p>
								</div>
								<div>
									<h2 className="text-[25px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
										4
									</h2>
									<span className="w-[100px] block h-2 bg-purpleColor rounded-full mt-[-14px]"></span>
									<p className="text_para">Tenaga Professional</p>
								</div>
								<div>
									<h2 className="text-[25px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
										100%
									</h2>
									<span className="w-[100px] block h-2 bg-irisBlueColor rounded-full mt-[-14px]"></span>
									<p className="text_para">Pelanggan Puas</p>
								</div>
							</div>
						</div>

						{/* Hero content */}
						<div className="flex gap-[30px] justify-end">
							<div>
								<img className="w-full rounded-lg" src={hero1} alt="" />
							</div>
							<div className="mt-[30px]">
								<img
									src={hero2}
									alt=""
									className="w-full mb-[30px] rounded-lg"
								/>
								<img src={hero3} alt="" className="w-full rounded-lg" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Hero Section End */}
		</>
	);
};

export default HeroSection;
